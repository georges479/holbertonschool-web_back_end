const countStudents = require('./3-read_file_async');
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];
    countStudents(dbFile)
    .then((output) => {
      res.end('This is the list of our students\n' + output);
    }).catch(() => {
      res.end('This is the list of our students\nCannot load the database');
    });
  }
});
app.listen(1245);

module.exports = app;
