import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import aiSkinImage from './assets/Ai-Skin-Blog-Landscape.webp';
import techImage from './assets/Tech.webp';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="blur-background" />
            <div className="home-container">
                {/* Header */}
                <header className="navbar">
                    <div className="logo-brand">
                        <img src={logo} alt="Logo" className="logo" />
                        <span className="brand-name">Skinfluence</span>
                    </div>
                    <nav className="nav-links">
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>

                    </nav>
                </header>

                {/* Main Section */}
                <main className="main-section">
                    <h1 className="main-title">Find Your Perfect Skincare Match</h1>
                    <p className="main-description">
                        Discover products that actually fit your skin. Start with our smart AI skin test!
                    </p>

                    <h2 className="disclaimer">
                        ⚠️ This tool is for informational purposes only and not a substitute for professional dermatological advice.
                    </h2>


                    <div className="center-button-section">
                        <Link to="/test" className="cta-button">Start My Skin Test</Link>
                    </div>

                    <div className="brand-buttons">
                        <Link to="/garnier" className="brand-box">Garnier</Link>
                        <Link to="/cerave" className="brand-box">CeraVe</Link>
                        <Link to="/theordinary" className="brand-box">The Ordinary</Link>
                    </div>

                    {/* ✅ Image Section */}
                    <div className="image-section">
                        <img src={aiSkinImage} alt="AI Skin Analysis" className="info-image" />
                        <img src={techImage} alt="Tech Analysis" className="info-image" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
