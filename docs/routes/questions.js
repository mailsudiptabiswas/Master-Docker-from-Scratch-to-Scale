const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/questions.db', sqlite3.OPEN_READWRITE);

// @route   GET /api/questions
// @desc    Get 50 questions randomly based on weightage logic (future support)
router.get('/', (req, res) => {
  const sql = `SELECT * FROM questions ORDER BY RANDOM() LIMIT 50`;
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// @route   POST /api/validate
// @desc    Validate user answers and return result
router.post('/validate', (req, res) => {
  const { questionId, userAnswers } = req.body;

  db.get('SELECT * FROM questions WHERE id = ?', [questionId], (err, row) => {
    if (err || !row) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const correctAnswers = JSON.parse(row.correct_options).sort();
    const user = userAnswers.sort();
    const isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(user);

    res.json({
      isCorrect,
      correctAnswers,
      explanation: row.explanation,
      domain: row.domain
    });
  });
});

module.exports = router;
