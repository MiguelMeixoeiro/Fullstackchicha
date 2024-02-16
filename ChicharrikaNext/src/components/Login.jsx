import React, { useState } from 'react';
import '../App.css'
import '../styles/Access.css'
import Modal from 'react-modal'; //biblioteca para modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //biblioteca icono cerrar modal
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //biblioteca icono cerrar modal
import {useNavigate} from 'react-router-dom';


//Estilos para el modal
const customStyles = {
    content: {
      backgroundColor: '#fefefe',
      margin: 'auto', //centrar horizontalmente
      top: '50%',
      transform: 'translateY(-50%)', //centrar verticalmente
      padding: '70px',
      border: 'none',
      borderRadius: '5px',
      width: '26%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center', 
     },
    overlay:{ //sombra del modal
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  };

function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [errores, setErrores] = useState({}); //objeto vacío para errores
  const [modalAbierto, setModalAbierto] = useState(false);
  const navigate = useNavigate() // Hook para acceder al historial de navegación
  
 
   //Función para redirigir a register
   const RedirectToRegister = () => {
    navigate('/access');
  }
  
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const erroresValidacion = {}

    
    //VALIDACIONES---------------------------
    // Validación email 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    erroresValidacion.email = 'El email no es válido';
  }

  // Validación de contraseña
  if (password.length < 6) {
    erroresValidacion.password = 'La contraseña no es correcta';
  }

  // Si hay errores, se actualiza el estado 'errores' y salta el mensaje correspondiente
  if (Object.keys(erroresValidacion).length > 0) {
    setErrores(erroresValidacion);
  }

  

  //MODAL---------------------------
    // Abrir el modal
    setModalAbierto(true);
    
  };

  // Función para redirigir a la página de la galería
  const RedirectToGallery = () => {
    navigate('/gallery');
    };

    // Función para cerrar el modal
  const closeModal = () => {
    setModalAbierto(false);
  };

  
  
  return (
    <main className='formulario-container'>
      <section className="formulario">
      <h4>Iniciar sesión</h4>
      <form className="form" onSubmit={handleSubmit}>
        
       {/* Email */}
        <div className="form-group">
          <label className='form-field' htmlFor='email'>
            <input
              name="email"
              className="control"
              type="text"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='off'
            />
            {errores.email && <span>{errores.email}</span>}
          </label>
        </div>

        {/* Contraseña */}
        <div className="form-group">
          <label className='form-field' htmlFor='password'>
            <input
              name="password"
              className="control"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              autoComplete='off'
            />
            {errores.password && <span>{errores.password}</span>}
          </label>
        </div>

        {/* Botones */}
        <section className="botons">
          <div className="center">
            <button className="button" type="submit">
              Iniciar sesión
            </button>
          </div>
          <div className="center">
            <button className="button" onClick={RedirectToRegister}>Crear cuenta</button>
          </div>
          </section>
        </form>
      

      {/* Modal de agradecimiento */}
        
      <Modal 
      isOpen={modalAbierto} 
      onRequestClose={closeModal}
      style={customStyles}
      >
        <div className='button_close_div'>
          <div className='button_close_icon' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} /> {/* Icono de "X" */}
          </div>
        </div>
       <div className='modal__thanks__text'>
        <h3>¡Bienvenid@ de nuevo!</h3>
        </div>
       <div className='button_gallery'>
          <button className='button' onClick={RedirectToGallery}>Ir a Galería</button>
        </div>
        
        
      </Modal>
    </section>
    </main>
    
    
  );
};

export default Login;
