import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import ProductPage from './ProductPage.jsx';
import TestFormPage from './TestFormPage.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from "./Footer.jsx"; // ✅ make sure this path is correct

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/test" element={<TestFormPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/:brand" element={<ProductPage />} />
                </Routes>
                <Footer />

        </Router>
    );
}

export default App;
