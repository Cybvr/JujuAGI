const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

app.post('/api/enhance-resume', async (req, res) => {
  try {
    const { jobTitle, yearsOfExperience } = req.body;

    const response = await axios.post(
      'https://api.anthropic.com/v1/completions',
      {
        model: 'claude-v1',
        prompt: `Create a professional resume for a ${jobTitle} with ${yearsOfExperience} years of experience. Include a compelling summary, relevant work experience, education, and key skills. Use industry-standard resume formatting.`,
        max_tokens_to_sample: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': CLAUDE_API_KEY,
        },
      }
    );

    res.json({ enhancedResume: response.data.completion });
  } catch (error) {
    console.error('Error calling Claude API:', error);
    res.status(500).json({ error: 'An error occurred while generating the resume.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});