const express = require('express');

// Create the Express application
const app = express();

// Define route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start server on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

