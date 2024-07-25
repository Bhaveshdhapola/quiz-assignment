const db = require('../db/db_connection');

const CONSTANTS = {
  TRUE_RESULT: { success: true, message: "Questions retrieved successfully" },
  FALSE_RESULT: { success: false, message: "Failed to retrieve questions" }
};

const LOG = {
  error: console.error,
  info: console.log
};

// Exporting the doService function
exports.doService = async (req) => {
  LOG.info('Retrieving all questions');

  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM questions';
    
    db.all(sql, [], (err, rows) => {
      if (err) {
        LOG.error(`Failed to retrieve questions: ${err.message}`);
        resolve({ data: CONSTANTS.FALSE_RESULT, message: 'Failed to retrieve questions' });
      } else {
        LOG.info(`Questions retrieved: ${JSON.stringify(rows)}`);
        resolve({ data: CONSTANTS.TRUE_RESULT, questions: rows });
      }
    });
  });
};
