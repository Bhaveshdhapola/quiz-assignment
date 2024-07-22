const db = require('../db/db_connection');
const validateRequest = (jsonReq) => {
  const isValid = jsonReq && jsonReq.quizId && jsonReq.questionText && Array.isArray(jsonReq.options) && jsonReq.correctAnswer !== undefined;
  LOG.info(`Validation result for request: ${JSON.stringify(jsonReq)} is ${isValid}`);
  return isValid;
};

// Exporting the doService function
exports.doService = async (req) => {
  const jsonReq = req.data; // Extract data from the request object
  LOG.info(`Received request data: ${JSON.stringify(jsonReq)}`);

  if (!validateRequest(jsonReq)) { // Validate the request
      LOG.error(`Bad add question request ${jsonReq ? JSON.stringify(jsonReq) : "null"}.`);
      return { data: CONSTANTS.FALSE_RESULT, message: 'Invalid request' };
  } else {
      const { quizId, questionText, options, correctAnswer } = jsonReq;

      const question = {
          id: questionIdCounter++,
          quizId,
          questionText,
          options,
          correctAnswer,
      };

      questions.push(question); // Save the question to mock database
      LOG.info(`Question added: ${JSON.stringify(question)}`);
      return { data: CONSTANTS.TRUE_RESULT, question };
  }
};
/*const express = require('express');
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
*/
