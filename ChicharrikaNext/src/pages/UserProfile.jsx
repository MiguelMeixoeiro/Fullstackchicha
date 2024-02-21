import { useParams, useLocation, useNavigate } from "react-router-dom";

import "../styles/UserProfile.css";

const UserProfile = () => {
  const { userId } = useParams();
  // console.log("id es: ", userId);
  const location = useLocation();

  const userData = location.state && location.state.userData;
  console.log("userData es: ", userData);

  //constante para redirigir a la página de edición de perfil
  const navigate = useNavigate();

  const handleEditClick = () => {
    // Redirigir a la página de edición de perfil
    navigate(`/edit-profile/${userId}`, { state: { userData: userData } });
  };

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
          <h2 className="profile-id">{`ID : ${userData.id}`}</h2>
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
      <button onClick={() => handleEditClick()}>Editar Info de usuario</button>
      </div>
  );
};

export default UserProfile;
