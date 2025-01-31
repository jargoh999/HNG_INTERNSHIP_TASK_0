import express from 'express';
import { DateTime } from 'luxon';

const app = express();
const port = 3000;

app.get('/api/info', (req, res) => {
  const email = 'fatoyeayomide123456@gmail.com'; // Replace with your registered email
  const current_datetime = DateTime.now().toISO();
  const github_url = 'https://github.com/jargoh999/HNG_INTERNSHIP_TASK_0'; // Replace with your GitHub URL
  const response = {
    email,
    current_datetime,
    github_url,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});