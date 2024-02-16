import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import GalleryFilter from "../components/GalleryFilter";
import "../styles/Gallery.css";
import Modal from "../components/Modal";

function Gallery() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [containerRect, setContainerRect] = useState(null);
  const [filter, setFilter] = useState(category || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const galleryContainerRef = useRef(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api.json");
        console.log("Respuesta del servidor:", response.data);
        const dataApi = response.data;
        const filteredImages = dataApi.data.filter((image) => {
          const hasCategory = !filter || image.keyword.includes(filter);
          const matchesSearch =
            !searchTerm ||
            image.title.toLowerCase().includes(searchTerm.toLowerCase());
          return hasCategory && matchesSearch;
        });
        setSearchTerm(searchTerm);
        setGalleryImages(filteredImages);
        console.log("Número de imágenes después del filtrado:", filteredImages.length);
        setImages(filteredImages);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();

    const galleryContainer = galleryContainerRef.current;

    const updateContainerRect = () => {
      if (galleryContainer) {
        setContainerRect(galleryContainer.getBoundingClientRect());
      }
    };

    updateContainerRect();

    const handleResize = () => {
      updateContainerRect();
    };

    galleryContainer.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      galleryContainer.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [category, filter, searchTerm]);

  const handleMouseMove = (event) => {
    if (containerRect) {
      const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
      const mouseY = event.clientY - containerRect.top - containerRect.height / 4;
      const rotateX =
        containerRect.height !== 0 ? (mouseY / containerRect.height) * 50 : 2;
      const rotateY =
        containerRect.width !== 0 ? (mouseX / containerRect.width) * 50 : 0;

      const imgContainers = document.querySelectorAll(".img-container");
      imgContainers.forEach((imgContainer) => {
        imgContainer.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      });
    }
  };

  const resetRotation = () => {
    const imgContainers = document.querySelectorAll(".img-container");
    imgContainers.forEach((imgContainer) => {
      imgContainer.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModal(true);
    resetRotation();
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModal(false);
    resetRotation();
  };

  useEffect(() => {
    if (modal && selectedImage) {
      const currentIndex = galleryImages.findIndex(
        (image) => image.id === selectedImage.id
      );
      setCurrentImageIndex(currentIndex);
    }
  }, [modal, selectedImage, galleryImages]);

  const nextImage = () => {
    if (
      currentImageIndex !== null &&
      currentImageIndex < galleryImages.length - 1
    ) {
      const nextIndex = currentImageIndex + 1;
      setSelectedImage(galleryImages[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setSelectedImage(galleryImages[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleFilterChange = (newCategory) => {
    setFilter(newCategory);
    if (newCategory === "") {
      navigate("/gallery");
    } else {
      navigate(`/gallery/${newCategory}`);
    }
  };

  return (
    <>
      <GalleryFilter onFilterChange={handleFilterChange} />
      <div

        className="gallery-container"
        ref={galleryContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="pictures-container">
  {Array.isArray(galleryImages) &&
    galleryImages.map((image) => (
      <div className="img-container" key={image.id}>
        <img
          src={`/img/${image.url}`}
          alt={image.title}
          onClick={() => openModal(image)}
        />
      </div>
    ))}
</div>

        {modal && selectedImage && (
          <Modal
            selectedImage={selectedImage}
            Close={closeModal}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        )}
      </div>
    </>
  );
}

export default Gallery;
