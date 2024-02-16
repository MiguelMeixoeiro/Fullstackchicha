import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'
import Terms from './pages/Terms'
import Payment from './pages/Payment'

const AppRouter = () => {
  return (
    <Router>
      
        <Routes>
        <Route path="/access" element={<Access />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        <Route path="/payment" element={<Payment />} />
        </Routes>
        
        {/* Agrega una ruta predeterminada, como la página de inicio */}
        
     
    </Router>
  );
};

export default AppRouter;
