const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route for handling questions and validation logic
const questionRoutes = require('./routes/questions');
app.use('/api', questionRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
