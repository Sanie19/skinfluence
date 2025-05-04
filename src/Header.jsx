import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="logo-brand">
                <img src={logo} alt="Logo" className="logo" />
                <span className="brand-name">Skinnfluence</span>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>

            <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
