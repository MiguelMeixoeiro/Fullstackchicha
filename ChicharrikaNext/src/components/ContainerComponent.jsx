// Contenedor que contiene tanto el Modal como la FinishPage
import React, { useState } from 'react';
import Modal from './Modal';
import FinishPage from './FinishPage';

const ContainerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]); // Lista para almacenar imágenes seleccionadas

  const openModal = (image) => {
    setSelectedImage(null); // Reinicia el estado al abrir un nuevo modal
    // ... (resto del código)
  };

  return (
    <div>
      {/* ... (otro contenido de tu aplicación) ... */}

      {selectedImage && <Modal image={selectedImage} Close={closeModal} setModalImageData={setSelectedImages} />}
      {selectedImages.length > 0 && <FinishPage selectedImages={selectedImages} />}
    </div>
  );
};

export default ContainerComponent;
