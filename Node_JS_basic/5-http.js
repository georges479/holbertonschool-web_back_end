const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];

    fs.promises.readFile(dbFile, 'utf-8')
      .then((content) => {
        const lines = content.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
        let output = `Number of students: ${students.length}\n`;

        const studentsByField = {};
        for (const line of students) {
          const cols = line.split(',');
          const firstName = cols[0];
          const field = cols[3];
          if (!studentsByField[field]) studentsByField[field] = [];
          studentsByField[field].push(firstName);
        }

        for (const field of Object.keys(studentsByField)) {
          output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
        }

        res.end(`This is the list of our students\n${output.trim()}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});
app.listen(1245);

module.exports = app;
