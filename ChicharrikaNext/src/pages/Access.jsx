import { useState } from 'react';
import '../App.css';
import '../styles/Access.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// Estilos modal agradecimiento
const customStyles = {
  content: {
    backgroundColor: '#fefefe',
    margin: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '70px',
    border: 'none',
    borderRadius: '5px',
    width: '26%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '25vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
Modal.setAppElement('#root');

const Access = () => {
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [errores, setErrores] = useState({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = () => {
    setRecaptchaCompleted(true);
  };

  const nameRegex = /^[A-Z][a-z]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroresValidacion = {};

    if (!name.trim()) {
      erroresValidacion.name = 'El name es obligatorio';
    } else if (!nameRegex.test(name)) {
      erroresValidacion.name = 'El name debe incluir la primera letra en mayúscula';
    }

    if (!lastname.trim()) {
      erroresValidacion.lastname = 'El lastname es obligatorio';
    } else if (!nameRegex.test(lastname)) {
      erroresValidacion.lastname = 'El lastname debe incluir la primera letra en mayúscula';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroresValidacion.email = 'Ingresa un correo electrónico válido';
    }

    if (password.length < 6) {
      erroresValidacion.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!recaptchaCompleted) {
      erroresValidacion.recaptcha = 'Completa el reCAPTCHA antes de registrarte.';
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
    } else {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, lastname, email, password }),
        });

        if (response.ok) {
          const responseData = await response.json();
          const { userId } = responseData;

          setModalAbierto(true);
          setErrores({});

          // Redirigir al perfil del usuario con el ID
          navigate(`/user-profile/${userId}`);
        } else {
          console.error('Error en la respuesta del servidor:', response);
        }
      } catch (error) {
        console.error('Error al hacer la solicitud de registro:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const closeModal = () => {
    // Cerrar el modal y se borran los errores
    setModalAbierto(false);
    setErrores({});
  };

  const redirectToGallery = () => {
    navigate('/gallery');
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const redirectToTerms = () => {
    navigate('/terms')
  }

  return (
    <main className="formulario-container">
      <section className="formulario">
        <h4>Crear Cuenta</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-field" htmlFor="name">
              <input
                name="name"
                className="control"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.name && <span>{errores.name}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="lastname">
              <input
                name="lastname"
                className="control"
                type="text"
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.lastname && <span>{errores.lastname}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="email">
              <input
                name="email"
                className="control"
                type="text"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.email && <span>{errores.email}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="password">
              <input
                name="password"
                className="control"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.password && <span>{errores.password}</span>}
            </label>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" required />
              Acepto los{' '}
              <a className="terms-link" onClick={redirectToTerms}>
                términos y condiciones
              </a>
            </label>
          </div>

          <div className="recaptcha">
            <ReCAPTCHA
              sitekey="6LdslFgpAAAAAEvhQ8tyiVMDXbgAHj-X8bgl30SF"
              onChange={onChange}
              className="captcha"
              theme="dark"
              required
            />
            {errores.recaptcha && <span>{errores.recaptcha}</span>}
          </div>

          <section className="botons">
            <div className="center">
              <button className="button__gallery" type="submit" disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Registro'}
              </button>
            </div>
            <div className="center">
              <button className="button__gallery" onClick={redirectToLogin}>
                Iniciar sesión
              </button>
            </div>
          </section>
        </form>

        <Modal isOpen={modalAbierto} onRequestClose={closeModal} style={customStyles}>
          <div className="button_close_div">
            <div className="button_close_icon" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="modal__thanks__text">
            <h3>¡Muchas gracias por registrarte, {name} {lastname}!</h3>
          </div>
          <div className="div_button_gallery">
            <button className="button__gallery" onClick={redirectToGallery}>
              Galería
            </button>
          </div>
        </Modal>
      </section>
    </main>
  );
};

export default Access;
