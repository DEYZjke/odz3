import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Cart.css';

function CartIcon() {
    return (
        <div className="cart">
            <Link to="/cart">
                <img src="/images/cart.png" alt="Cart" className="cart-icon" />
            </Link>
        </div>
    );
}

function CartPage({ cartItems, setCartItems }) {
    const handleRemoveFromCart = (index) => {
        const newCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(newCartItems);
    };

    
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    <ul className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <div className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <h2>{item.name}</h2>
                                        <p>Price: {item.price} $</p>
                                        <p>{item.Desc}</p>
                                        <button className="remove-from-cart-button" onClick={() => handleRemoveFromCart(index)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="total-amount">
                        <h2>Total Amount: <br></br> {totalAmount.toFixed(2)} $</h2>
                    </div>
                </>
            )}
            <div style={{ marginTop: '10px' }}>
                <Link to="/" className="back-to-home-button">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

function Cart({ cartItems, setCartItems }) {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
            </Routes>
            <CartIcon />
        </>
    );
}

export default Cart;
