import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserProfile.css";

const UserProfile = ({ id }) => {
  // Estado para almacenar la información del usuario
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/register");
        console.log(response);
    
        const contentType = response.headers["content-type"] || response.headers["Content-Type"];
    
        if (contentType && contentType.includes("application/json")) {
          const userInfo = response.data[0];
          console.log(userInfo);
          setUserData(userInfo);
        } else {
          console.warn("La respuesta no es de tipo JSON");
          console.log("Contenido de la respuesta:", response.data);
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error.message);
      }
    };
    
    
  
    fetchData();
  }, [id]);
  



  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img
          className="profile-picture"
          src="/img/cat.jpg"
          alt={`Perfil de ${userData.name}`}
        />
        <div className="user-info">
          <h1 className="profile-name">{`${userData.name} ${userData.lastname}`}</h1>
          <h2 className='profile-id'>{`ID : ${userData.id}`}</h2>
        </div>
      </div>
      <div className="profile-details">
        <p className="profile-email">Correo: {userData.email}</p>
        <p className="profile-password">Contraseña: {userData.password}</p>
      </div>

      <div className="flipated-button">
      <button
        onClick={() => {
          // Redireccionar solo si hay datos de usuario
          if (userData) {
            // Redirige a la galería virtual
            window.location.href = "/multiverse";
          }
        }}
      >
        Flipado
      </button>
      </div>
    </div>
  );
};

export default UserProfile;
