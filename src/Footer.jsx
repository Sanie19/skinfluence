import React from 'react';
import './App.css'; // Ensure this file contains the styles below

import instagramIcon from './assets/icons/instagram.jpg';
import twitterIcon from './assets/icons/twitter.jpg';
import facebookIcon from './assets/icons/facebook.jpg';

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
                    <img src={instagramIcon} alt="Instagram" className="social-img" />
                </a>
                <a
                    href="https://www.twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <img src={twitterIcon} alt="Twitter" className="social-img" />
                </a>
                <a
                    href="https://www.facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <img src={facebookIcon} alt="Facebook" className="social-img" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
