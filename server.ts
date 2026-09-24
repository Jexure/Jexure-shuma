import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API health endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Real-time AI Assistant Chat endpoint
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { hustleName, hustleCategory, question, chatHistory, firstCustomerPlaybook } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ reply: null, reason: 'No GEMINI_API_KEY set' });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are a pragmatic, elite startup mentor for the "AI Side-Hustle Finder" platform.
The user is building the side hustle: "${hustleName}" (${hustleCategory}).
Known Playbook: ${JSON.stringify(firstCustomerPlaybook || {})}
Recent Chat Context: ${JSON.stringify(chatHistory?.slice(-3) || [])}
User Question: "${question}"

Guidelines:
- Give a direct, punchy, actionable response (150 - 250 words max).
- Include concrete numbers (pricing, time, templates) or bullet points.
- Zero generic fluff. Never say "As an AI language model". Speak like a veteran solopreneur who has made six figures doing this.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return res.json({ reply: response.text });
  } catch (err: any) {
    console.error('Server Gemini API error:', err);
    return res.status(200).json({ reply: null, error: err.message });
  }
});

// AI Niche & Competitor Deep Dive (Premium Feature)
app.post('/api/ai/deep-dive', async (req, res) => {
  try {
    const { hustleName, targetAudience, userLocation } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({ analysis: null });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Conduct an in-depth market opportunity audit for the side hustle: "${hustleName}".
Target Audience: ${targetAudience}
Location/Market: ${userLocation || 'Global / Remote'}

Provide a structured breakdown with:
1. "Unfair Advantage Opportunity" (1-2 sentences on what competitors overlook)
2. "3 Untapped High-Margin Sub-Niches"
3. "Immediate 48-Hour Validation Test" (step-by-step test to verify willing buyers before building)`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return res.json({ analysis: response.text });
  } catch (err: any) {
    console.error('Deep dive API error:', err);
    return res.status(200).json({ analysis: null, error: err.message });
  }
});

// Mount Vite or serve static production build
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: Number(PORT) },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`AI Side-Hustle Finder running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
