import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/nutritions">Nutritions</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
