const express = require('express');
const router = express.Router();
const db = require('../db/db_connection');

router.post('/addQuestion', (req, res) => {
  const { question_text, option1, option2, option3, option4, correct_answer } = req.body;

  const stmt = db.prepare(`INSERT INTO questions (question_text, option1, option2, option3, option4, correct_answer) VALUES (?, ?, ?, ?, ?, ?)`);
  
  stmt.run(question_text, option1, option2, option3, option4, correct_answer, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to add question' });
    } else {
      res.status(200).json({ message: 'Question added successfully' });
    }
  });

  stmt.finalize();
});

module.exports = router;
