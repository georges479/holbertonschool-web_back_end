import '../controllers/AppController';
import '../controllers/StudentsController';
const express = require('express');

const router = express.Router(); 
router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
