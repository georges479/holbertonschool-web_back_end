const fs = require('fs');

function readDatabase(filePath) {
  return fs.promises.readFile(filePath, 'utf-8')
    .then ((content) => {
      const lines = content.split('\n');
      const cleanLines = lines.filter((line) => line.trim() !== '');
      const dataBase = cleanLines.slice(1);

      const contentByField = {};
      for (const line of dataBase) {
        const colums = line.split(',');
        const firstName = colums[0];
        const field = colums[3];

        if (!contentByField[field]) {
          contentByField[field] = [];
        }
        contentByField[field].push(firstName);
      }
      return contentByField;
    }).catch (() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = readDatabase;
