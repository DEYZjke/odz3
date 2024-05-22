import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FlowerList from './components/FlowerList';
import FlowerDetail from './components/FlowerDetail';
import Cart from './components/Cart';

function App() {
    const [flowers, setFlowers] = useState([]);
    const [featuredFlower, setFeaturedFlower] = useState(null);
    const [cartItems, setCartItems] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/flowers')
            .then(response => response.json())
            .then(data => {
                setFlowers(data);
                if (data.length > 0) {
                    setFeaturedFlower(data[0]);
                }
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Plants Shop</h1>
                </header>
                <Cart cartItems={cartItems} setCartItems={setCartItems} /> {}
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    {featuredFlower && (
                                        <div className="featured-flower">
                                            <div className="featured-flower-text">
                                                <h3>Best</h3>
                                                <h3>plant</h3>
                                                <h3>unrepeatable</h3>
                                                <h2>{featuredFlower.name}</h2>
                                            </div>
                                            <div className="featured-flower-image">
                                                <img src={featuredFlower.image} alt={featuredFlower.name} />
                                            </div>
                                            <div className="featured-flower-text2">
                                                <h3>Description</h3>
                                                <h3>{featuredFlower.Desc}</h3>
                                            </div>
                                        </div>
                                    )}
                                    <h3 className="best-seller-heading">Best Seller Products</h3>
                                    <FlowerList flowers={flowers} />

                                    <div className="footer-flower">
                                        <div className="featured-flower-text">
                                            <h2>20%</h2>
                                            <h2>OFF</h2>
                                            <h3>22 may to 22 june</h3>
                                        </div>
                                        <div className="featured-flower-image">
                                            <img src="/images/Jalapeno.png" alt="Jalapeno" />
                                        </div>
                                        <div className="featured-flower-text">
                                            <h2>Summer <br />Sale</h2>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <Route
                            path="/flower/:id"
                            element={<FlowerDetail flowers={flowers} setFeaturedFlower={setFeaturedFlower} setCartItems={setCartItems} cartItems={cartItems} />} 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
