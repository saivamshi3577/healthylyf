import React, { useState } from 'react';
import './Navbar.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaBars } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
  
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Healthy LYF Logo" />
        </div>
        <div className="social-icons">
          <FaTwitter />
          <FaFacebook />
          <FaPinterest />
          <FaInstagram />
        </div>
        <button className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

    
      <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#nutritions">Nutritions</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="contact-info">
          <div><FaPhone /> <a href="tel:+919948004834">+91 9948004834</a></div>
          <div><FaEnvelope /> <a href="mailto:info@healthylf.com">info@healthylf.com</a></div>
          <div><FaMapMarkerAlt /> Midjil, India</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
