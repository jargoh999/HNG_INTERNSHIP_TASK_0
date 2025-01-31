import express from 'express';


const app = express();
const port = 3000;
const utcDateTime = new Date().toISOString();
app.get('/api/info', (req, res) => {
  const email = 'fatoyeayomide123456@gmail.com'; // Replace with your registered email
  const current_datetime = utcDateTime;
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