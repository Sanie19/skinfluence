import React, { useState, useEffect } from 'react';
import './App.css';
import products from './assets/products.json';
import Header from './Header';
import Footer from './Footer';

function TestFormPage() {
    const [frontPhoto, setFrontPhoto] = useState('');
    const [leftPhoto, setLeftPhoto] = useState('');
    const [rightPhoto, setRightPhoto] = useState('');
    const [aiResult, setAiResult] = useState('');

    const questions = [
        "How does your skin feel a few hours after cleansing (tight, oily, balanced)?",
        "Do you notice visible shine on your face throughout the day? If yes, where?",
        "Is your skin prone to dry, flaky patches?",
        "Do you feel the need to moisturize more than once per day?",
        "Does your skin get irritated easily by new products?",
        "How large are your pores in the T-zone (nose, forehead, chin)?",
        "Do you experience oiliness on your cheeks or just in the T-zone?",
        "Do your makeup or skincare products tend to slide off during the day?",
        "Have you had any allergic reactions to skincare products before?",
        "Does your skin often sting, itch, or burn after applying skincare?",
        "Do you react to fragranced products or essential oils?",
        "Do you frequently get breakouts? If so, where (chin, cheeks, forehead)?",
        "Are your breakouts cystic (under the skin) or surface-level pimples?",
        "Do you experience blackheads or whiteheads?",
        "Do you pick at or touch blemishes regularly?",
        "Do you have persistent redness or flushing (especially around the cheeks or nose)?",
        "Have you been diagnosed with rosacea or eczema?",
        "Does your skin feel dry but still looks oily?",
        "Do you have rough or uneven texture?",
        "Do you see fine lines more prominently when your skin is dry?",
    ];

    useEffect(() => {
        const widgets = window.uploadcare?.Widget;
        if (!widgets) return;

        const selectors = [
            { name: '[name="Front Face Photo URL"]', setter: setFrontPhoto },
            { name: '[name="Left Face Photo URL"]', setter: setLeftPhoto },
            { name: '[name="Right Face Photo URL"]', setter: setRightPhoto }
        ];

        selectors.forEach(({ name, setter }) => {
            const input = document.querySelector(name);
            if (input && !input._uploadcareWidgetInitialized) {
                const widget = widgets(input);
                widget.onUploadComplete(info => setter(info.cdnUrl));
                input._uploadcareWidgetInitialized = true;
            }
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const answers = Array.from(document.querySelectorAll('input[type="text"]')).map(input => input.value);

        const prompt = `
You are a professional skincare assistant AI.

The user has uploaded 3 photos of their face:
- Front: ${frontPhoto}
- Left: ${leftPhoto}
- Right: ${rightPhoto}

Here are their answers:
${answers.map((ans, i) => `Q${i + 1}: ${ans}`).join('\n')}

Available skincare products:
${JSON.stringify(products)}

Your task:
1. Analyze the skin type and concerns.
2. Based on the above, recommend 2–3 products **from the list only**.
3. Format your result in JSON with:
{
  "skinType": "...",
  "analysis": "...",
  "recommendations": [
    { "name": "...", "description": "..." },
  ]
}
`;

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [{ role: "user", content: prompt }],
                    temperature: 0.7
                }),
            });

            const data = await response.json();
            const aiText = data.choices[0].message.content;
            setAiResult(aiText);
        } catch (error) {
            console.error('AI request failed:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <Header />
            <div className="test-form-container">
                <h2>Upload Face Photos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="upload-section">
                        <label>Front Face Photo:</label>
                        <input type="hidden" role="uploadcare-uploader" name="Front Face Photo URL" data-clearable data-images-only required />
                        {frontPhoto && <img src={frontPhoto} alt="Front" />}
                    </div>

                    <div className="upload-section">
                        <label>Left Side Photo:</label>
                        <input type="hidden" role="uploadcare-uploader" name="Left Face Photo URL" data-clearable data-images-only required />
                        {leftPhoto && <img src={leftPhoto} alt="Left" />}
                    </div>

                    <div className="upload-section">
                        <label>Right Side Photo:</label>
                        <input type="hidden" role="uploadcare-uploader" name="Right Face Photo URL" data-clearable data-images-only required />
                        {rightPhoto && <img src={rightPhoto} alt="Right" />}
                    </div>

                    <h2>Skin Analysis Questionnaire</h2>
                    {questions.map((q, i) => (
                        <div key={i}>
                            <label>{q}</label>
                            <input type="text" name={`Question ${i + 1}`} placeholder="Your answer" required />
                        </div>
                    ))}

                    <button type="submit">Submit</button>
                </form>

                {/* ✅ AI Result shown below form */}
                {aiResult && (
                    <div className="ai-result-box">
                        <h3>🧠 AI Recommendation</h3>
                        <pre>{aiResult}</pre>
                    </div>
                )}
            </div>

        </>
    );
}

export default TestFormPage;
