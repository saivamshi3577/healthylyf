// Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-icon">
                <a href="/">Continue Shopping</a>
            </div>
        </div>
    );
};

export default Cart;
