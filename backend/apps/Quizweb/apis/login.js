const fs = require('fs');
const path = require('path');

const CONSTANTS = {
  FALSE_RESULT: { success: false, message: "Invalid credentials" }
};
const LOG = {
  error: console.error,
  info: console.log
};

exports.doService = async req => {
  let users;

  try {
    const data = fs.readFileSync(path.join(__dirname, '../db/users.json'), 'utf8');
    users = JSON.parse(data).users;
    LOG.info(`Loaded users: ${JSON.stringify(users)}`);
  } catch (error) {
    LOG.error("Failed to load users.json", error);
    return { data: CONSTANTS.FALSE_RESULT };
  }

  const jsonReq = req;

  if (!jsonReq) {
    LOG.error("Request data is null or undefined");
    return { data: CONSTANTS.FALSE_RESULT };
  }

  LOG.info(`Received login request: ${JSON.stringify(jsonReq)}`);

  if (!validateRequest(jsonReq)) {
    LOG.error(`Bad login request. Received data: ${JSON.stringify(jsonReq)}`);
    return { data: CONSTANTS.FALSE_RESULT };
  }

  const { email, password } = jsonReq;
  const user = users.find(user => user.email === email);
  LOG.info(`Found user: ${JSON.stringify(user)}`);

  if (user && password === user.password) {
    LOG.info(`User authenticated: ${JSON.stringify(user)}`);
    return {
      data: {
        user: { email: user.email, role: user.role }
      }
    };
  } else {
    LOG.error(`Authentication failed for email: ${email}`);
    return { data: CONSTANTS.FALSE_RESULT };
  }
};

const validateRequest = jsonReq => jsonReq && jsonReq.email && jsonReq.password;
