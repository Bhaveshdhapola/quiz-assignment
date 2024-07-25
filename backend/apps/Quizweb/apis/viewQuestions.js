const db = require('../db/db_connection');

const CONSTANTS = {
  TRUE_RESULT: { success: true, message: "Questions retrieved successfully" },
  FALSE_RESULT: { success: false, message: "Failed to retrieve questions" }
};
const LOG = {
  error: console.error,
  info: console.log
};

exports.doService = async (req) => {
  LOG.info('Fetching all questions');
  
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM questions';
    db.all(sql, [], (err, rows) => {
      if (err) {
        LOG.error(`Error fetching questions: ${err.message}`);
        resolve({ data: CONSTANTS.FALSE_RESULT });
      } else {
        LOG.info(`Questions retrieved: ${JSON.stringify(rows)}`);
        resolve({ data: CONSTANTS.TRUE_RESULT, questions: rows });
      }
    });
  });
};





