import React, { useState } from 'react';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [name, setname] = useState('');
  const [lastnames, setlastnames] = useState('');
  const [correo, setCorreo] = useState('');
  const [contacto, setContacto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [provincia, setProvincia] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [aceptarComunicaciones, setAceptarComunicaciones] = useState(false);

  // Errores validaciones
  const [nameError, setnameError] = useState('');
  const [lastnamesError, setlastnamesError] = useState('');
  const [correoError, setCorreoError] = useState('');
  const [contactoError, setContactoError] = useState('');
  const [direccionError, setDireccionError] = useState('');
  const [provinciaError, setProvinciaError] = useState('');
  const [numeroTarjetaError, setNumeroTarjetaError] = useState('');

  const navigate = useNavigate();

  const redirectToTerms = () => {
    navigate('/terms')
  }
  
  const redirectToThanks = () => {
    navigate('/thanks'); 
  };

  const resetErrors = () => {
    setnameError('');
    setlastnamesError('');
    setCorreoError('');
    setContactoError('');
    setDireccionError('');
    setProvinciaError('');
    setNumeroTarjetaError('');
  };

  const handlePagar = () => {
    resetErrors();

    // Validaciones
    if (!/^[A-Z][a-z]*$/.test(name)) {
      setnameError('name inválido. La primera letra debe estar en mayúscula.');
      return;
    }

    if (!/^[A-Z][a-z]*$/.test(lastnames)) {
      setlastnamesError('lastnames inválidos. La primera letra de cada lastname debe estar en mayúscula.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      setCorreoError('Correo inválido. Debe contener un "@" y un punto (.)');
      return;
    }

    if (!/^\d+$/.test(contacto)) {
      setContactoError('Contacto inválido. Solo se permiten números.');
      return;
    }

    if (!/^\d{8,}$/.test(numeroTarjeta)) {
      setNumeroTarjetaError('Número de tarjeta inválido. Debe contener al menos 8 dígitos y solo números.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(provincia)) {
      setProvinciaError('Provincia inválida. Solo se permiten letras y espacios.');
      return;
    }

    if (!/^[a-zA-Z\s\d]+$/.test(direccion)) {
      setDireccionError('Dirección inválida. Solo se permiten letras, números y espacios.');
      return;
    }

    // Lógica de pago (simulado)
    if (correo && contacto && aceptarTerminos) {
      if (aceptarComunicaciones) {
        // Lógica para gestionar la aceptación de comunicaciones comerciales
        redirectToThanks(); // Redirige a la página "Thanks"
      } else {
        redirectToThanks(); // Redirige a la página "Thanks"
      }
    } else {
      // Puedes mostrar un mensaje de error específico si es necesario
    }
  };

  return (
    <section className='payment-container'>
      <h2>Confirma tu compra</h2>
      <form className='form-payment'>
        <div className='form-group'>
          <label className='label-field'>
            name:
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} required />
            <span className='error-message'>{nameError}</span>
          </label>
          <label className='label-field'>
            lastnames:
            <input type="text" value={lastnames} onChange={(e) => setlastnames(e.target.value)} required />
            <span className='error-message'>{lastnamesError}</span>
          </label>
        </div>

        <div className='form-group'>
          <label className='label-field'>
            Email:
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <span className='error-message'>{correoError}</span>
          </label>

          <label className='label-field'>
            Contacto:
            <input type="tel" value={contacto} onChange={(e) => setContacto(e.target.value)} required />
            <span className='error-message'>{contactoError}</span>
          </label>
        </div>

        <div>
          <label className='label-field'>
            Provincia:
            <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} required />
            <span className='error-message'>{provinciaError}</span>
          </label>
          <label className='label-field'>
            Dirección:
            <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            <span className='error-message'>{direccionError}</span>
          </label>
        </div>

        <div className='form-group'>
          <label className='label-field'>
            Número de Tarjeta:
            <input type="text" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} required />
            <span className='error-message'>{numeroTarjetaError}</span>
          </label>
        </div>

        <div>
          <label className='form-checkbox'>
            <input className='checkbox' type="checkbox" checked={aceptarTerminos} onChange={() => setAceptarTerminos(!aceptarTerminos)} required />
            Acepto los <a className='terms-link' onClick={redirectToTerms}>términos y condiciones</a>
          </label>

          <label className='form-checkbox'>
            <input className='checkbox'
              type="checkbox"
              checked={aceptarComunicaciones}
              onChange={() => setAceptarComunicaciones(!aceptarComunicaciones)}
            />
            Acepto recibir comunicaciones comerciales
          </label>
        </div>

        <div className='button-payment'>
          <button className='pay' type="button" onClick={handlePagar}>
            Pagar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Payment;
