const fs = require('fs');

function countStudents(filePath) {
  let content;

  try {
    content = fs.readFileSync(filePath, 'utf-8'); // Read the file content in synchronisation
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = content.split('\n'); // Slice in lines the string of content.
  const cleanLines = lines.filter((lines) => lines.trim() !== ''); // Delete de emptys lines of end of file.
  const students = cleanLines.slice(1); // Delete the header line.
  console.log(`Number of students: ${students.length}`);

  const studentsByField = {}; // Object to store the students by field.

  for (const line of students) { // Iterate over each student line.
    const colums = line.split(','); // Split each line by comma to get the columns.
    const firstName = colums[0];
    const field = colums[3];

    if (!studentsByField[field]) { // If the field does not exist, create an array for it.
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstName); // Add the first name to the corresponding field array.
  }
  for (const field in studentsByField) { // Iterate over each field in the object.
    console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
  }
}

module.exports = countStudents;
