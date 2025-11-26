const express = require('express');
const dataFilePath = process.argv[2];
const countStudents = require('./3-read_file_async.js');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  countStudents(dataFilePath)
    .then((msg) => {
      res.send(`This is the list of our students\n${msg}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245, () => {
  console.log('Server is listening on http://localhost:1245');
});

module.exports = app;
