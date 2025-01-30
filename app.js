import express from 'express';
import { DateTime } from 'luxon';

const app = express();
const port = 3000;

app.get('/api/info', (req, res) => {
  const email = 'fatoyeayomide123456@gmail.com'; // Replace with your registered email
  const currentDateTime = DateTime.now().toISO();
  const gitHubUrl = 'https://github.com/jargoh999'; // Replace with your GitHub URL
  const response = {
    email,
    currentDateTime,
    gitHubUrl,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});