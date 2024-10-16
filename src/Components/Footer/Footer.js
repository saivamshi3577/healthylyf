// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Stay Updated with Our Latest Products</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
