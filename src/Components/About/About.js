import React from 'react';
import './About.css';
import farmer1 from '../Assets/farmer1.jpg';
import farmer2 from '../Assets/farmer2.jpg';
import farmer3 from '../Assets/farmer3.jpg';
import bannerimage from '../Assets/eco-background.jpg';
import vamshiImage from '../Assets/vamshi.jpg'; // Replace with actual image path
import anushaImage from '../Assets/anusha.jpg'; // Replace with actual image path

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="header-section">
        <img src={bannerimage} alt="Sprouts Header" className="header-image" />
        <div className="header-text">
          <h1>Growing quality, cultivating lasting success.</h1>
          <p>
            Healthy habits create a life of balance, strength, and happiness. Our platform offers tailored wellness solutions, focusing on fitness, nutrition, and mental well-being.
          </p>
          <ul>
            <li>Personalized Wellness Plans</li>
            <li>Expert Guidance</li>
            <li>Holistic Approach</li>
          </ul>
          <button className="discover-button">Discover More</button>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="eco-section">
        <div className="eco-content">
          <h2>ECO-Friendly Products can be Made from Scratch</h2>
          <p>We believe in sustainable and eco-friendly agricultural practices.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What They Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={vamshiImage} alt="Vamshi" className="testimonial-image" />
            <p>"Healthy Lyf offers tailored wellness solutions that fit my lifestyle perfectly. Their support is exceptional."</p>
            <h4>Vamshi</h4>
            <span>Customer</span>
          </div>
          <div className="testimonial-card">
            <img src={anushaImage} alt="Anusha" className="testimonial-image" />
            <p>"I love how Healthy Lyf prioritizes my unique needs. Their expert advice has significantly improved my health."</p>
            <h4>Anusha</h4>
            <span>Customer</span>
          </div>
        </div>
      </section>

      {/* Meet Our Farmers Section */}
      <section className="farmers-section">
        <h2>Meet Our Farmers</h2>
        <div className="farmer-cards">
          <div className="farmer-card">
            <img src={farmer1} alt="Kevin Smith" className="farmer-image" />
            <h3>Kevin Smith</h3>
            <span>Farmer</span>
          </div>
          <div className="farmer-card">
            <img src={farmer2} alt="Jessica Brown" className="farmer-image" />
            <h3>Jessica Brown</h3>
            <span>Farmer</span>
          </div>
          <div className="farmer-card">
            <img src={farmer3} alt="David Martin" className="farmer-image" />
            <h3>David Martin</h3>
            <span>Farmer</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
