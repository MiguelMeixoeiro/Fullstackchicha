import React, { useState } from "react";
import "../styles/Contact.css"; // Importa los estilos
import { LogoHeaderW, FbIcon, IgIcon, LnkdIcon, XIcon } from "../assets/icons";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const [formAlert, setFormAlert] = useState("");

  const cerrarVentana = () => {
    // Implementa la lógica para cerrar la ventana aquí
    console.log("Ventana cerrada");
  };

  const validarFormulario = () => {
    const { name, email, mensaje } = formData;

    // Validación de name y lastname
    const nameRegExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (!nameRegExp.test(name)) {
      setFormAlert(
        "Por favor, introduce un name y lastname válidos (iniciando con mayúsculas)."
      );
      return;
    }

    // Validación de email
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      setFormAlert(
        "Por favor, introduce una dirección de correo electrónico válida."
      );
      return;
    }

    // Validación de mensaje
    if (!mensaje.trim()) {
      setFormAlert("Por favor, introduce un mensaje.");
      return;
    }

    // Si todas las validaciones son exitosas
    setFormAlert("Formulario enviado correctamente");
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones necesarias
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="sliderLateral" id="sliderLateralContainer">
      <LogoHeaderW />
      <section className="slider__formulario">
        <form className="form" id="myForm">
          <a className="navicon" onClick={cerrarVentana} id="sliderRojo">
            <i className="fas fa-times icon"></i>
          </a>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="name y lastname"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            id="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="textarea"
            id="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={{ resize: "none" }}
          ></textarea>
          <div className="center">
            <button
              type="button"
              className="button-contact"
              onClick={validarFormulario}
            >
              Submit
            </button>
          </div>
          <div id="formulario__alert" className="alerta">
            {formAlert && <p>{formAlert}</p>}
          </div>
        </form>
      </section>

      <section className="redes">
        <FbIcon />
        <IgIcon />
        <LnkdIcon />
        <XIcon />
        <img src="./img/twiter.svg" alt="" className="redes--formato twit" />
      </section>
    </section>
  );
};

export default Contact;
