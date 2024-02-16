// FinishPage.js
import React from 'react';
import '../styles/Finish.css'
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';


const FinishPage = () => {
  const { cartItems } = useCart();

const navigate = useNavigate();

const redirectToPayment = () => {
  navigate('/payment')
}

const redirectToGallery = () => {
  navigate('/gallery')
}


  return (
    <section className='finish-container'>
      <div className='finish-black'>
        <div className='titles'>
          <h2>Confirmar pedido</h2>
           </div>
        
        <div>
        {cartItems.map((item, index) => (
          
          <div className='info-product' key={index}>
            
            <img src={`img/${item.url}`} alt={item.title} style={{ width: 'auto', height: '100px' }} />
            <div>

            </div>
            <div className='title-price'>
              <h4>{item.title}</h4>
              <span>{item.price} €</span>
              </div>
            
          </div>
           ))}
        </div>

       
       
        
        <button className='button-pay' type='submit' onClick={redirectToPayment}>Comprar</button>
        <button className='button-pay' type='submit' onClick={redirectToGallery}>Seguir comprando</button>
      </div>
      
    </section>
  );
};

export default FinishPage;
