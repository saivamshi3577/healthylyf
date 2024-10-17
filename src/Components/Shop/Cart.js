
import React, { useState } from 'react';
import './Cart.css'; 

const Cart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems
            .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                                <div className="quantity-control">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="remove-button">Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-footer">
                <a href="/">Continue Shopping</a>
            </div>
        </div>
    );
};

export default Cart;
