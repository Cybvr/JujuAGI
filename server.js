import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

app.post('/api/enhance-resume', async (req, res) => {
  const { jobTitle, description } = req.body;
  try {
    console.log('Request payload:', req.body);
    console.log('Anthropic API Key:', ANTHROPIC_API_KEY ? 'Set' : 'Not set');

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: `Create a professional resume for a ${jobTitle} based on the following description: ${description}. Include a compelling summary, relevant work experience, education, and key skills. Use industry-standard resume formatting.`
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
      }
    );
    console.log('Anthropic API response:', response.data);
    const enhancedResume = response.data.content[0].text;
    res.json({ enhancedResume });
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      const errorMessage = error.response?.data?.error || error.message || 'Unknown error';
      res.status(statusCode).json({ error: errorMessage });
    } else {
      res.status(500).json({ error: 'An internal server error occurred. Please try again later.' });
    }
  }
});

// Add a test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running correctly' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});