
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Shop.css'; 
import alfalfa from '../Assets/alfalfa.jpg';
import broccoli from '../Assets/broccoli.jpg';
import clover from '../Assets/clover.jpg';
import radish from '../Assets/radish.jpg';
import lentil from '../Assets/lentil.jpg';
import sunflower from '../Assets/sunflower.jpg';
import sprout5 from '../Assets/sprout5.webp';
import sprout4 from '../Assets/sprout4.webp';
import soybean from '../Assets/sprout1.webp';
import pea from '../Assets/pea.jpg';
import sprout3 from '../Assets/sprout3.png';
import sprout2 from '../Assets/sprout2.jpg';

const sproutsData = [
    { id: 1, name: 'Alfalfa Sprouts', price: 5.99, image: alfalfa },
    { id: 2, name: 'Broccoli Sprouts', price: 6.49, image: broccoli },
    { id: 3, name: 'Clover Sprouts', price: 4.99, image: clover },
    { id: 4, name: 'Radish Sprouts', price: 5.49, image: radish },
    { id: 5, name: 'Lentil Sprouts', price: 4.49, image: lentil },
    { id: 6, name: 'Sunflower Sprouts', price: 7.99, image: sunflower },
    { id: 7, name: 'Wheatgrass Sprouts', price: 6.99, image: sprout5 },
    { id: 8, name: 'Chickpea Sprouts', price: 5.79, image: sprout4 },
    { id: 9, name: 'Soybean Sprouts', price: 4.79, image: soybean },
    { id: 10, name: 'Green Pea Sprouts', price: 6.29, image: pea },
    { id: 11, name: 'Mung Bean Sprouts', price: 5.19, image: sprout3 },
    { id: 12, name: 'Garbanzo Sprouts', price: 5.89, image: sprout2 }
];

const Shop = () => {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const addToCart = (sprout) => {
        const existingItem = cart.find(item => item.id === sprout.id);
        let updatedCart;

        if (existingItem) {
            updatedCart = cart.map(item =>
                item.id === sprout.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...sprout, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="shop-container">
            <div className="cart-icon">
                <Link to="/cart">
                    <FaShoppingCart size={30} />
                    {cart.length > 0 && <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
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
