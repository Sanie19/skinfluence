import React from 'react';
import './App.css'; // Make sure this includes the CSS below

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Skinnfluence · All rights reserved.</p>

            <div className="social-icons">
                <a
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                    href="https://www.twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                    href="https://www.facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
