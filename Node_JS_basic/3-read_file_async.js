const fs = require('fs').promises;

function countStudents(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((content) => {
      const lines = content.split('\n');
      const cleanLines = lines.filter((line) => line.trim() !== '');
      const students = cleanLines.slice(1);
      console.log(`Number of students: ${students.length}`);

      const studentByField = {};

      for (const line of students) {
        const colums = line.split(',');
        const firstName = colums[0];
        const field = colums[3];

        if (!studentByField[field]) {
          studentByField[field] = [];
        }
        studentByField[field].push(firstName);
      }
      for (const field of Object.keys(studentByField)) {
        console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${studentByField[field].join(', ')}`);
      }
    }).catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
