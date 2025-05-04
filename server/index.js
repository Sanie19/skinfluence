import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();
app.use(cors());
app.use(express.json());

// Use the Ollama model you pulled (e.g., "llama3", "mistral", or "codellama")
const MODEL = 'llama3';

app.post('/analyze', async (req, res) => {
    try {
        const { frontPhoto, leftPhoto, rightPhoto, answers, email } = req.body;

        const prompt = `
You are a virtual dermatologist. Based on these photos and skincare answers, generate:
1. Skin type
2. Issues
3. Morning/Night routine
4. Tips

Photos:
- Front: ${frontPhoto}
- Left: ${leftPhoto}
- Right: ${rightPhoto}

Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join('\n')}
`;

        const ollamaRes = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: MODEL,
                prompt,
                stream: false,
            }),
        });

        const data = await ollamaRes.json();
        res.json({ result: data.response });
    } catch (err) {
        console.error('❌ Ollama Error:', err);
        res.status(500).json({ error: 'Failed to get recommendation.' });
    }
});

app.listen(3000, () => {
    console.log('✅ Backend running on http://localhost:3000');
});
