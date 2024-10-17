import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  const menuRef = useRef(null);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0); 
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

   
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, [isOpen]);

  return (
    <header className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <div className="top-bar">
        <div className="logo">
        <Link to="/">
          <img src={logo}  alt="Healthy LYF Logo" />
          </Link>
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
      
      <nav ref={menuRef} className={`main-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/nutritions" onClick={() => setIsOpen(false)}>Nutritions</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
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
