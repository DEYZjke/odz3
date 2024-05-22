import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerList.css';

function FlowerList({ flowers }) {
    const navigate = useNavigate();

    const handleFlowerClick = (id) => {
        navigate(`/flower/${id}`);
    };

    return (
        <div className="flower-list">
            {flowers.map(flower => (
                <div
                    key={flower.id}
                    className="flower-card"
                    onClick={() => handleFlowerClick(flower.id)}
                >
                    <img src={flower.image} alt={flower.name} />
                    <h2>{flower.name}</h2>
                    <p className="flower-price">Price: {flower.price} $</p>
                </div>
            ))}
        </div>
    );
}

export default FlowerList;
