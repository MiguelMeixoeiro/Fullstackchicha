import React from "react"; // Agrega la importación de React

import { useWishList } from "../hooks/WishListContext";
import "../styles/WishList.css"; // Asegúrate de tener un archivo CSS asociado

const WishList = () => {
  const { wishList } = useWishList();

  return (
    <div className="wish-container">
    <div className="tarjeta-padre">
      {wishList.map((img, index) => (
        // Solo renderizar la tarjeta si img tiene un valor
        img && (
          <div className="tarjeta" key={index}>
            <div className="wish-img-container">
              <img className="wish-img" src={`img/${img.url}`} alt={img.title} />
            </div>
            <div className="wish-subtile">
              {img.title}
            </div>
            <div className="wish-price">
              {img.price}€
            </div>
          </div>
        )
      ))}
    </div>
  </div>
);
};


export default WishList;

