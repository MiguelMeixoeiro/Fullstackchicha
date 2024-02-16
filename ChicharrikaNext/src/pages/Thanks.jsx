import React from 'react'
import '../styles/Thanks.css'
import { LogoMiguelLetters } from '../assets/icons'
import { useNavigate } from 'react-router-dom';



function Thanks() {

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home')
  }

  return (
  <main className='main-thanks-container'>
        <section className="black-container">
            <h2>¡Gracias por tu compra!</h2>
            <figure className="logo-firma">
                <LogoMiguelLetters/>
            </figure>
   
        </section>
        
       

    </main>
  )
}

export default Thanks