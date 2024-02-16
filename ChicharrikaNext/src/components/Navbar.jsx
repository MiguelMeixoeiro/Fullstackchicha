import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BotonToggle from './BotonToggle';
import BurguerButton from './BurguerButton';

function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked)
  }
  return (
    <>
    <NavContainer>
    <nav className={`nav-bar ${clicked ? 'active' : ''}`}>
        <ul>
            <BotonToggle />
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/gallery">GALERIA</Link>
            </li>
            <li>
              <Link to="/access">ACCESO</Link>
            </li>  
        </ul>
    </nav>
    <div className='burguer-nav'>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
    </div>
    </NavContainer> 
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
ul {
  list-style: none;
  display: flex;
  gap: 60px;
  font-size: 1.4em;
  padding-left: 0px;
}

li a {
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  }

li a:hover {
  color: #f20519;
  font-weight: 800;
  }
.nav-bar{
  //cuando está pequeña la pantalla
  @media only screen and (max-width: 840px){
    position: absolute;
    margin: 0;
    display: none;
    ul {
      display: block;
    
    }
  }
}
.nav-bar.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
 }

.burguer-nav{
  margin-top: 12px;
   @media only screen and (min-width: 840px) {
     display: none;
   }
 
}  
`