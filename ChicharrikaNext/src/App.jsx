import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css';
import Header from './components/Header';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'
import Terms from './pages/Terms'
import Home from './pages/Home';
import { CartProvider } from './CartContext';
import EasterEgg from './pages/EasterEgg/FlipatedVerse';
import Finish from './pages/Finish';
import Payment from './pages/Payment'
import Thanks from './pages/Thanks'
import WishList from './pages/WishList'
import { WishListProvider } from './hooks/WishListContext';


function App() {
  return (
    <Router>
      <CartProvider>
      <WishListProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery/:category?" element={<Gallery />} />
          <Route path="/access" element={<Access />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment" element={<Payment />} />          
          <Route path="/user-profile/:userId?" element={<UserProfile userId={1} />} />
          <Route path="/finish" element={<Finish />} />  {/* Agrega la ruta de la página de finalización */}
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/multiverse" element={<EasterEgg />} /> 
          <Route path="/wishlist" element={<WishList/>} />
        </Routes>
        </WishListProvider>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;