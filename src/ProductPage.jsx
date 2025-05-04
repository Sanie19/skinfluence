import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

import cleanser_for_combination_skin from './assets/Cerave1/cleanser_for_combination_skin.png'
import cleanser_for_dry_skin from './assets/Cerave1/cleanser_for_dry_skin.png'
import toner from './assets/Cerave1/toner.png'
import vitamin_c from './assets/Cerave1/vitamin_c.png'
import cerave_moisturizing_cream from './assets/Cerave1/cerave_moisturizing_cream.png'
import sunscreen from './assets/Cerave1/sunscreen.png'
import acne_control from './assets/plus/plus/acne_control.jpg'
import retinol from './assets/plus/plus/retinol.jpg'
import blackhead from './assets/plus/plus/blackhead_for_oilyskin.webp'
import purifying from './assets/plus/plus/purifying _face_wash.webp'


import cleanser from './assets/theordinary/theordinary/cleanser.jpg'
import toner2 from './assets/theordinary/theordinary/toner.webp'
import serum2 from './assets/theordinary/theordinary/serum.webp'
import moisturizer2 from './assets/theordinary/theordinary/moisturizer.webp'
import sunscreen2 from './assets/theordinary/theordinary/sunscreen.webp'

import multi_peptide from './assets/plus/plus/multi-peptide(eye serum).webp'
import mandelic from './assets/plus/plus/mandelic10+ha.webp'


import cleanser3 from './assets/garnier/garnier/cleanser.jpg'
import toner3 from './assets/garnier/garnier/toner.png'
import serum3 from './assets/garnier/garnier/serum.webp'
import moisturizer3 from './assets/garnier/garnier/moisturizer.webp'
import sunscreen3 from './assets/garnier/garnier/sunscreen.jpg'
import vitamin_c_for_oily_skin from './assets/plus/plus/vitamin_c_for_oilyskin.webp'


const products = {
    garnier: [
        {
            name: "Garnier Pure Active Charcoal Cleanser",
            price: "$4",
            desc: "Deep-cleansing charcoal face wash that removes oil, dirt, and impurities for clearer, fresher skin.",
            image: cleanser3
        },
        {
            name: "Garnier  Micellar Water with Rose",
            price: "$2.50",
            desc: "Gentle micellar water infused with rose water to cleanse, remove makeup, and soothe the skin in one step.",
            image: toner3
        },
        {
            name: "Garnier Vitamin C Brightening Serum",
            price: "$4.50",
            desc: "Brightening Vitamin C serum that evens skin tone, fades dark spots, and gives a radiant, glowing complexion.",
            image: serum3
        },
        {
            name: "Garnier's Hyaluronic Aloe Cream",
            price: "$5.50",
            desc: "Garnier's Hyaluronic Aloe Cream is a lightweight, fast-absorbing moisturizer designed to deeply hydrate and soothe dry and sensitive skin.",
            image: moisturizer3
        },
        {
            name: "Garnier Sunscreen Lotion SPF 30",
            price: "$6",
            desc: "Designed for active lifestyles, this sunscreen lotion is sweat and water-resistant, fast-drying, and hypoallergenic.",
            image: sunscreen3
        },
        {
            name: "Garnier SkinActive Blackhead Eliminating Scrub",
            price: "$6.50",
            desc: "Garnier SkinActive Blackhead Eliminating Scrub,is a popular skincare product designed to address blackheads and oily skin concerns. ",
            image: blackhead
        },
        {
            name: "Garnier Pure Active Neem Face Wash",
            price: "$4.50",
            desc: "Formulated with neem extract, this face wash is designed to purify the skin by removing dirt, pollution, excess oil, and impurities. It helps unclog pores, making it suitable for those with oily or acne-prone skin.",
            image: purifying
        },
        {
            name: "Garnier's Even & Matte Vitamin C",
            price: "$6.50",
            desc: "Garnier's Even & Matte Vitamin C line is designed to address dull, uneven skin tones and dark spots.",
            image: vitamin_c_for_oily_skin
        }
    ],
    cerave: [
        {
            name: "CeraVe Foaming Facial Cleanser",
            price: "$13.50",
            desc: "Removes oil and dirt without disrupting the skin barrier.",
            image: cleanser_for_combination_skin
        },
        {
            name: "CeraVe Hydrating Facial Cleanser",
            price: "$12.50",
            desc: "CeraVe Hydrating Facial Cleanser is a dermatologist-developed, non-foaming face wash designed to gently cleanse while preserving the skin’s natural moisture barrier.",
            image: cleanser_for_dry_skin
        },
        {
            name: "CeraVe Hydrating Toner",
            price: "$14",
            desc: "CeraVe Hydrating Toner is a dermatologist-developed, alcohol-free facial toner designed to hydrate and restore the skin's natural barrier.",
            image: toner
        },
        {
            name: "CeraVe's Skin Renewing Vitamin C Serum",
            price: "$15",
            desc: "CeraVe's Skin Renewing Vitamin C Serum is a dermatologist-developed facial serum designed to brighten and improve skin tone and texture. ",
            image: vitamin_c
        },
        {
            name: "CeraVe Moisturizing Cream",
            price: "$17.50",
            desc: "CeraVe Moisturizing Cream is a dermatologist-developed, non-comedogenic moisturizer designed to hydrate and restore the skin's natural barrier.",
            image: cerave_moisturizing_cream
        },
        {
            name: "CeraVe Hydrating Sheer Sunscreen SPF 30",
            price: "$19",
            desc: "Offers lightweight, non-greasy hydration with a sheer finish; blends easily without leaving a white cast.",
            image: sunscreen
        },
        {
            name: "CeraVe Acne Control Gel",
            price: "$11.50",
            desc: "CeraVe Acne Control Gel is a lightweight, oil-free treatment designed to combat acne while maintaining skin hydration and barrier health.",
            image: acne_control
        },
        {
            name: "CeraVe Resurfacing Retinol Serum",
            price: "$19.50",
            desc: "This formulation is non-comedogenic, fragrance-free, and suitable for sensitive skin. It's particularly beneficial for those dealing with acne marks and uneven skin texture.",
            image: retinol
        }

    ],
    theordinary: [
        {
            name: "The Ordinary Glucoside Foaming Cleanser",
            price: "$25.50",
            desc: "The Ordinary Glucoside Foaming Cleanser is a gentle, vegan, and cruelty-free facial cleanser designed to effectively cleanse the skin while maintaining its natural moisture barrier. ",
            image: cleanser
        },
        {
            name: "The Ordinary Glycolic Acid 7% Exfoliating Toner",
            price: "$19.50",
            desc: "The Ordinary Glycolic Acid 7% Exfoliating Toner is a popular skincare product designed to gently exfoliate the skin, enhancing radiance and improving texture. ",
            image: toner2
        },
        {
            name: "The Ordinary Salicylic Acid 2%",
            price: "$22.50",
            desc: "The Ordinary Salicylic Acid 2% Solution is a targeted facial serum formulated to address acne, blackheads, and oily skin concerns. ",
            image: serum2
        },
        {
            name: "The Ordinary Natural Moisturizing Factors",
            price: "$23.50",
            desc: "Brightens skin and helps clear clogged pores.",
            image: moisturizer2
        },
        {
            name: "The Ordinary’s Mineral UV Filters SPF 30 ",
            price: "$26.50",
            desc: "The Ordinary’s Mineral UV Filters SPF 30 with Antioxidants is a mineral-based sunscreen designed to provide broad-spectrum protection against UVA and UVB rays. ",
            image: sunscreen2
        },
        {
            name: "Multi-Peptide + HA Serum",
            price: "$27",
            desc: "Reduces eye puffiness and dark circles.",
            image: multi_peptide
        },
        {
            name: "The Ordinary Caffeine Solution 5% + EGCG",
            price: "$29.50",
            desc: "Addresses multiple signs of aging and improves skin elasticity.",
            image: mandelic
        },

    ]
};

function ProductPage() {
    const { brand } = useParams();
    const brandKey = brand.toLowerCase();
    const brandProducts = products[brandKey];

    if (!brandProducts) {
        return (
            <div className="product-page">
                <h2>No products found for "{brand}"</h2>
                <a href="/" className="back-link">← Back to Home</a>
            </div>
        );
    }

    return (
        <div className="product-page">
            <h1>{brand.charAt(0).toUpperCase() + brand.slice(1)} Products</h1>
            <div className="product-grid">
                {brandProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                        <p className="product-desc">{product.desc}</p>
                    </div>
                ))}
            </div>
            <a href="/" className="back-link">← Back to Home</a>
        </div>
    );
}

export default ProductPage;
