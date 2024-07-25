const db = require('../db/db_connection');

const CONSTANTS = {
  FALSE_RESULT: { success: false, message: "Invalid request" },
  TRUE_RESULT: { success: true, message: "Question added successfully" }
};

const LOG = {
  error: console.error,
  info: console.log
};


const validateRequest = (jsonReq) => {
  LOG.info(`Validating request: ${JSON.stringify(jsonReq)}`);
  return jsonReq &&
         jsonReq.quizId &&
         jsonReq.questionText &&
         Array.isArray(jsonReq.options) &&
         jsonReq.correctAnswer !== undefined;
};


const doService = async (req) => {
  LOG.info('Adding a new question');

  const jsonReq = req.body;

  if (!validateRequest(jsonReq)) {
    LOG.error('Invalid request data');
    return { data: CONSTANTS.FALSE_RESULT };
  }

  const { quizId, questionText, options, correctAnswer } = jsonReq;
  const optionsString = JSON.stringify(options);

  return new Promise((resolve) => {
    const sql = `INSERT INTO questions (quizId, questionText, options, correctAnswer) VALUES (?, ?, ?, ?)`;
    db.run(sql, [quizId, questionText, optionsString, correctAnswer], function (err) {
      if (err) {
        LOG.error(`Failed to add question: ${err.message}`);
        resolve({ data: CONSTANTS.FALSE_RESULT });
      } else {
        LOG.info(`Question added with ID: ${this.lastID}`);
        resolve({ data: CONSTANTS.TRUE_RESULT, questionId: this.lastID });
      }
    });
  });
};

module.exports = { doService };
