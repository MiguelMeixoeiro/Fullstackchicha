import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/AnimatedCard.css'


const AnimatedCard = () => {
  return (
    <>
    <section className='main-cta'>
      <div className="card">
        {/* <img src="./img/foto2.jpg" alt="letrero de neon en un muro" className="imgcta" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg> */}
        <p className="cardp--formato">IMPRESIONES EN GRAN FORMATO!</p>
        <div className="card-content">
          <p className="card-title">FOTOS EN GRAN FORMATO</p>
          <p className="card-description">Transforma tus espacios con la elegancia de la fotografía de <strong>Miguel Meixoeiro</strong>. <br /><br />Descubre nuestras impresiones en gran formato y lleva el arte a tu hogar hoy.</p>
          <div className="center no-decoration">
            <a  className="link-banner"><Link to="/gallery">VISITA NUESTRA GALERÍA</Link></a>
            
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AnimatedCard;
