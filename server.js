// Import Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Middleware to log the request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Endpoint to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint to handle GET requests to /about
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Endpoint to handle all other routes (404 Not Found)
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
