import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import './EditProfile.css';

const EditProfile = ({ onSave, onCancel }) => {
  const location = useLocation();

  // Manejar el caso en que userData es null
  const userData = location.state?.userData || {};
  console.log('userData en EDITPROFILE es:', userData);

  // Establecer valores iniciales basados en userData
  const [editedUserData, setEditedUserData] = useState({
    name: userData.name || '',
    lastname: userData.lastname || '',
    tel: userData.tel || '',
    email: userData.email || '',
    password: userData.password || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Validar los datos si es necesario
    // Llamar a la función onSave con los datos editados
    onSave && onSave(editedUserData);
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-heading">Editar Perfil</h2>
      <div className="form-group">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder={`Nombre original: ${userData.name || ''}`}
          value={editedUserData.name}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          name="lastname"
          placeholder={`Apellido original: ${userData.lastname || ''}`}
          value={editedUserData.lastname}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          name="tel"
          placeholder={`Teléfono original: ${userData.tel || ''}`}
          value={editedUserData.tel}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          placeholder={`Email original: ${userData.email || ''}`}
          value={editedUserData.email}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder={`Contraseña original: ${userData.password || ''}`}
          value={editedUserData.password}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="button-group">
        <button onClick={handleSaveClick} className="button">
          Guardar Cambios
        </button>
        <button onClick={onCancel} className="button button-cancel">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
