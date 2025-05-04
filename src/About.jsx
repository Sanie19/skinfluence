import React from 'react';
import './App.css';
import cerave1 from './assets/cerave1.png';
import garnier from './assets/garnier.png';
import theordinary from './assets/theordinary.png';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    const scrollImages = ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg'];

    return (
        <div className="about-container">
            <Header />

            {/* Left Scroll Strip */}
            <div className="scroll-strip left">
                <div className="scroll-content">
                    {[...scrollImages, ...scrollImages, ...scrollImages].map((src, i) => (
                        <img key={i} src={src} alt="scroll" className="scroll-img" />
                    ))}
                </div>
            </div>

            {/* Right Scroll Strip */}
            <div className="scroll-strip right">
                <div className="scroll-content">
                    {[...scrollImages, ...scrollImages, ...scrollImages].map((src, i) => (
                        <img key={i} src={src} alt="scroll" className="scroll-img" />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    We started as a small skincare project with one clear goal: help people feel confident in their own skin.
                    At first, we focused on learning what real skin needs — not just trends.
                    Our journey began with CeraVe, a brand we truly believed in for its gentle, dermatologist-approved products.
                    As we grew, we proudly added Garnier, known for affordable and effective everyday skincare,
                    and The Ordinary, a bold and honest brand loved for its results and transparency.
                    What began as a simple idea is now a growing community of skincare lovers.
                    We’re still small — but passionate, and always focused on helping others discover what works for their skin.
                    This is just the beginning.
                </p>

                {/* Partner Logos with Links */}
                <div className="partner-section">
                    {[
                        {
                            img: garnier,
                            desc: 'Clinically tested products for all skin types.',
                            link: 'https://www.garnierusa.com/',
                        },
                        {
                            img: cerave1,
                            desc: 'Dermatologist-developed formulas with essential ceramides.',
                            link: 'https://www.cerave.com',
                        },
                        {
                            img: theordinary,
                            desc: 'Transparent, science-based skincare at fair prices.',
                            link: 'https://theordinary.com',
                        },
                    ].map((partner, idx) => (
                        <a
                            key={idx}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="partner-card"
                        >
                            <img src={partner.img} alt={`Brand ${idx + 1}`} />
                            <p>{partner.desc}</p>
                        </a>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default About;
