// GalleryFilter.js
import React from "react";
import "../styles/GalleryFilter.css";

const GalleryFilter = ({ onFilterChange }) => {
  const handleCategoryClick = (category) => {
    onFilterChange(category);
  };

  return (
    <div className="gallery-filter">
      <div className="filter-btn-container">
        <button className="gallery-button" onClick={() => handleCategoryClick("")}>
          TODAS
        </button>
        <button className="gallery-button" onClick={() => handleCategoryClick("personas")}>
          PERSONAS
        </button>
        <button className="gallery-button" onClick={() => handleCategoryClick("naturaleza")}>
          NATURALEZA
        </button>
        <button className="gallery-button" onClick={() => handleCategoryClick("efectos")}>
          EFECTOS
        </button>
        <button className="gallery-button" onClick={() => handleCategoryClick("arquitectura")}>
          ARQUITECTURA
        </button>
        <button className="gallery-button" onClick={() => handleCategoryClick("animales")}>
          ANIMALES
        </button>
      </div>
    </div>
  );
};

export default GalleryFilter;
