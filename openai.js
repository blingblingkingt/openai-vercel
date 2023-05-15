const axios = require("axios");

module.exports = async (req, res) => {
  const { prompt, max_tokens } = req.query;

  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      prompt,
      max_tokens
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  res.json(response.data);
};
