import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './FlowerDetail.css';

function FlowerDetail({ flowers, setFeaturedFlower, setCartItems, cartItems = [] }) {
    const { id } = useParams();
    const [flower, setFlower] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/flowers/${id}`)
            .then(response => response.json())
            .then(data => setFlower(data))
            .catch(error => console.error('Error fetching flower:', error));
    }, [id]);

    const handleAddToCart = () => {
        if (flower) {
            setCartItems([...cartItems, flower]);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000); 
        }
    };

    if (!flower) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flower-details">
            <div className="flower-image">
                <img src={flower.image} alt={flower.name} />
            </div>
            <div className="flower-info">
                <h2>{flower.name}</h2>
                <p className="flower-price">Price: {flower.price} $</p>
                <p className="flower-description">Details: {flower.Desc}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                {showNotification && (
                    <div className="notification">
                        Item added to cart!
                    </div>
                )}
                {}
                <div style={{ marginTop: '10px' }}>
                    <Link to="/" className="back-to-home-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FlowerDetail;
