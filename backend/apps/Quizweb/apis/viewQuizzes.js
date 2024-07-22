const express = require('express');
const router = express.Router();
const db = require('../db/db_connection');

// Fetch quizzes
router.get('/quizzes', (req, res) => {
  db.all('SELECT * FROM questions', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

module.exports = router;
