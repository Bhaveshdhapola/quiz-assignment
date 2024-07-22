const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load user data from users.json
const usersFilePath = path.resolve(__dirname, '../db/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')).users;

// Login API
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({
      message: 'Login successful',
      user: {
        email: user.email,
        role: user.role
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
    