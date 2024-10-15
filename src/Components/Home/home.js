import React from 'react';
import './Home.css';
import { FaLeaf, FaHeart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';  
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from '../Assets/sprout1.webp';
import img2 from '../Assets/sprout2.webp';
import img3 from '../Assets/sprout3.webp';
import img4 from '../Assets/sprout4.webp';
import img5 from '../Assets/sprout5.webp';
import heroBanner from '../Assets/hero-banner.jpg';
import alfalfa from '../Assets/alfalfa.jpg';
import broccoli from '../Assets/broccoli.jpg';
import mungbean from '../Assets/mungbean.webp';
import radish from '../Assets/radish.jpg'; 
import clover from '../Assets/clover.jpg';
import sunflower from '../Assets/sunflower.jpg';
import pea from '../Assets/pea.jpg';
import lentil from '../Assets/lentil.jpg';
import onion from '../Assets/onion.jpg';
import cabbage from '../Assets/cabbage.jpg';

const quotes = [
  { img: img1, quote: "Fuel Your Health with Nature’s Power" },
  { img: img2, quote: "Discover the Nutritional Wonders of Sprouts" },
  { img: img3, quote: "Fresh Sprouts for a Healthy Lifestyle" },
  { img: img4, quote: "Packed with Protein, Perfect for You" },
  { img: img5, quote: "Grow Strong with Every Sprout" }
];

const Home = () => {
  return (
    <div className="home-container">
   
      <Carousel 
        autoPlay 
        infiniteLoop 
        interval={4000} 
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {quotes.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={`Slide ${index}`} />
            <p className="legend">{item.quote}</p>
          </div>
        ))}
      </Carousel>

     
      <section className="hero">
        <div className="hero-content">
          <h1>Fuel Your Health with Nature's Power</h1>
          <p>Fresh Sprouts Delivered to Your Doorstep</p>
          <button>Shop Now</button>
        </div>
        <img src={heroBanner} alt="Fresh Sprouts Banner" className="hero-img" />
      </section>

      
      <section className="product-preview">
        <h2>Our Sprout Varieties</h2>
        <div className="sprout-card-container">
          <div className="sprout-card">
            <img src={alfalfa} alt="Alfalfa Sprouts" />
            <h3>Alfalfa Sprouts</h3>
            <p>Rich in vitamins A, C, and K.</p>
          </div>
          <div className="sprout-card">
            <img src={broccoli} alt="Broccoli Sprouts" />
            <h3>Broccoli Sprouts</h3>
            <p>Full of antioxidants to reduce inflammation.</p>
          </div>
          <div className="sprout-card">
            <img src={mungbean} alt="Mung Bean Sprouts" />
            <h3>Mung Bean Sprouts</h3>
            <p>Great source of plant-based protein.</p>
          </div>
          <div className="sprout-card">
            <img src={radish} alt="Radish Sprouts" />
            <h3>Radish Sprouts</h3>
            <p>High in vitamin C and great for digestion.</p>
          </div>
          <div className="sprout-card">
            <img src={clover} alt="Clover Sprouts" />
            <h3>Clover Sprouts</h3>
            <p>Excellent for heart health and cholesterol levels.</p>
          </div>
          <div className="sprout-card">
            <img src={sunflower} alt="Sunflower Sprouts" />
            <h3>Sunflower Sprouts</h3>
            <p>Rich in protein and vitamins B and E.</p>
          </div>
          <div className="sprout-card">
            <img src={pea} alt="Pea Sprouts" />
            <h3>Pea Sprouts</h3>
            <p>Excellent source of vitamins K and C.</p>
          </div>
          <div className="sprout-card">
            <img src={lentil} alt="Lentil Sprouts" />
            <h3>Lentil Sprouts</h3>
            <p>High in protein and fiber.</p>
          </div>
          <div className="sprout-card">
            <img src={onion} alt="Onion Sprouts" />
            <h3>Onion Sprouts</h3>
            <p>Rich in antioxidants and great for immunity.</p>
          </div>
          <div className="sprout-card">
            <img src={cabbage} alt="Cabbage Sprouts" />
            <h3>Cabbage Sprouts</h3>
            <p>Helps in detoxification and digestion.</p>
          </div>
        </div>
      </section>

  
      <section className="health-benefits">
        <h2>Health Benefits of Sprouts</h2>
        <div className="benefit-container">
          <div className="benefit-item">
            <FaLeaf className="benefit-icon" />
            <h3>Rich in Vitamins</h3>
            <p>Sprouts are packed with essential vitamins for overall health.</p>
          </div>
          <div className="benefit-item">
            <FaHeart className="benefit-icon" />
            <h3>Boosts Heart Health</h3>
            <p>Loaded with fiber, helps maintain healthy cholesterol levels.</p>
          </div>
        </div>
      </section>

     
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"These sprouts changed my life! I feel healthier and more energized."</p>
            <h4>- Customer 1</h4>
          </div>
          <div className="testimonial-card">
            <p>"A great addition to my daily diet. Highly recommend!"</p>
            <h4>- Customer 2</h4>
          </div>
        </div>
      </section>


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
    </div>
  );
};

export default Home;
