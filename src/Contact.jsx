import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import './App.css'; // Ensure your styles are here

function Contact() {
    const [contactType, setContactType] = useState("individual");

    return (
        <>
            <Header />

            <div className="contact-wrapper">
                <div className="contact-container">
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-subtitle">
                        Whether you're reaching out as an individual or a business, we're excited to hear from you!
                    </p>

                    {/* Contact Type Switcher */}
                    <div className="contact-switch">
                        <button
                            className={`contact-btn ${contactType === "individual" ? "active" : ""}`}
                            onClick={() => setContactType("individual")}
                        >
                            I'm an Individual
                        </button>
                        <button
                            className={`contact-btn ${contactType === "business" ? "active" : ""}`}
                            onClick={() => setContactType("business")}
                        >
                            I'm a Business
                        </button>
                    </div>

                    <form className="contact-form">
                        <div className="form-grid">
                            <div>
                                <label>Full Name</label>
                                <input type="text" placeholder="Your name" required />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type="email" placeholder="you@example.com" required />
                            </div>
                        </div>

                        {contactType === "business" && (
                            <>
                                <div>
                                    <label>Company Name</label>
                                    <input type="text" placeholder="Your company name" required />
                                </div>
                                <div>
                                    <label>Company Website</label>
                                    <input type="url" placeholder="https://yourcompany.com" />
                                </div>
                            </>
                        )}

                        <div>
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder={`Tell us more about what you need as a ${contactType === "business" ? "business" : "person"}...`}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
