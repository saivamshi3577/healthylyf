import React, { useState } from 'react';
import './Shop.css'; // Import the CSS file for styling
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const sproutsData = [
    { id: 1, name: 'Alfalfa Sprouts', price: 5.99, image: '/assets/alfalfa-sprouts.jpg' },
    { id: 2, name: 'Broccoli Sprouts', price: 6.49, image: '/assets/broccoli-sprouts.jpg' },
    { id: 3, name: 'Clover Sprouts', price: 4.99, image: '/assets/clover-sprouts.jpg' },
    { id: 4, name: 'Radish Sprouts', price: 5.49, image: '/assets/radish-sprouts.jpg' },
    { id: 5, name: 'Lentil Sprouts', price: 4.49, image: '/assets/lentil-sprouts.jpg' },
    { id: 6, name: 'Sunflower Sprouts', price: 7.99, image: '/assets/sunflower-sprouts.jpg' },
    { id: 7, name: 'Wheatgrass Sprouts', price: 6.99, image: '/assets/wheatgrass-sprouts.jpg' },
    { id: 8, name: 'Chickpea Sprouts', price: 5.79, image: '/assets/chickpea-sprouts.jpg' },
    { id: 9, name: 'Soybean Sprouts', price: 4.79, image: '/assets/soybean-sprouts.jpg' },
    { id: 10, name: 'Green Pea Sprouts', price: 6.29, image: '/assets/green-pea-sprouts.jpg' },
    { id: 11, name: 'Mung Bean Sprouts', price: 5.19, image: '/assets/mung-bean-sprouts.jpg' },
    { id: 12, name: 'Garbanzo Sprouts', price: 5.89, image: '/assets/garbanzo-sprouts.jpg' }
];

const Shop = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (sprout) => {
        setCart([...cart, sprout]);
        alert(`${sprout.name} has been added to the cart.`);
        localStorage.setItem('cart', JSON.stringify([...cart, sprout]));
    };

    return (
        <div className="shop-container">
            <div className="cart-icon">
                <Link to="/cart">
                    <FaShoppingCart size={30} />
                </Link>
            </div>
            <h1>Sprouts Shop</h1>
            <div className="products-grid">
                {sproutsData.map((sprout) => (
                    <div key={sprout.id} className="product-card">
                        <img src={sprout.image} alt={sprout.name} />
                        <h3>{sprout.name}</h3>
                        <p>${sprout.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(sprout)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
