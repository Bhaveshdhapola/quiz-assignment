const db = require('./db_connection');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_text TEXT NOT NULL,
    option1 TEXT NOT NULL,
    option2 TEXT NOT NULL,
    option3 TEXT NOT NULL,
    option4 TEXT NOT NULL,
    correct_answer TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Error creating table', err);
    } else {
      console.log('Table created successfully');
    }
  });

  
  const stmt = db.prepare(`INSERT INTO questions (question_text, option1, option2, option3, option4, correct_answer) VALUES (?, ?, ?, ?, ?, ?)`);
  
  stmt.run(
    'What is the capital of France?',
    'Berlin',
    'Madrid',
    'Paris',
    'Rome',
    'Paris'
  );
  
  stmt.run(
    'Which planet is known as the Red Planet?',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Mars'
  );

  
  stmt.finalize((err) => {
    if (err) {
      console.error('Error finalizing statement', err);
    } else {
      console.log('Data inserted successfully');
    }
  });
});


db.close((err) => {
  if (err) {
    console.error('Could not close database', err);
  } else {
    console.log('Database closed');
  }
});