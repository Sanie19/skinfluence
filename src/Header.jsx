import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';

const Header = () => {
    return (
        <header className="navbar">
            <div className="logo-brand">
                <img src={logo} alt="Logo" className="logo" />
                <span className="brand-name">Skinnfluence</span>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link> {/* ✅ New Home link */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <Link to="/test" className="test-button">Take Test</Link>
            </nav>
        </header>
    );
};

export default Header;
