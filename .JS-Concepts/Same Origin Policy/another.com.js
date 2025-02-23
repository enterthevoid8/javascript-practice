// How to Bypass Same-Origin Policy. On the server (https://another.com)

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com'); // Allow specific origin
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is cross-origin data!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
