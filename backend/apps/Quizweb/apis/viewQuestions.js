const db = require('../db/db_connection');
exports.doService = async (req) => {
    LOG.info('Viewing all questions');
    return { data: CONSTANTS.TRUE_RESULT, questions };
};
/*const express = require('express');
const router = express.Router();
const db = require('../db/db_connection');

// Fetch all questions
router.get('/questions', (req, res) => {
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
*/