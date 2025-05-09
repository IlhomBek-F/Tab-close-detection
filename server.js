import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middleware to parse JSON body (important for application/json content-type)
app.use(bodyParser.text({ type: 'text/plain' }));

// Endpoint to receive beacon
app.post('/log', (req, res) => {
  const { time } = JSON.parse(req.body) || {};

  // Simulate some action (e.g., updating DB, marking user as offline)
  console.log(`User has left (via tab hide). Time: ${time}`);

  res.status(200).send('Beacon received');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
