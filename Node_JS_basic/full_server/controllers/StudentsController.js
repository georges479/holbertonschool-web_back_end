import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((contentByField) =>  {
        let responseText = 'This is the list of our students\n';

        const fields = Object.keys(contentByField).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        for (const field of fields) {
          const list = contentByField[field].join(', ');
          responseText += `Number of students in ${field}: ${contentByField[field].length}. List: ${list}\n`;
	}

        res.status(200).send(responseText.trim());
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
    res.status(500).send('Major parameter must be CS or SWE');
    return;
    }

    readDatabase(process.argv[2])
      .then((contentByField) => {
        const list = contentByField[major] || [];
        const responseText = `List: ${list.join(', ')}`;
        res.status(200).send(responseText);
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
export default StudentsController;
