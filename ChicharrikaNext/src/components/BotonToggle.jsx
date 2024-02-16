import React, { useState } from 'react';
import Contact from './Contact'; // Importa el componente Contact

const BotonToggle = () => {
  const [mostrarContacto, setMostrarContacto] = useState(false);

  const handleToggleContacto = () => {
    setMostrarContacto(!mostrarContacto);
  };

  return (
    <div>
      <li>
        <button id="sliderRojo" className="toggle-logo" onClick={handleToggleContacto}>
          CONTACTO
        </button>
      </li>

      {mostrarContacto && <Contact />}
    </div>
  );
};

export default BotonToggle;