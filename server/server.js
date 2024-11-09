// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Dummy data to simulate database
const tasks = [
    { id: 1, name: 'Design Hello', status: 'In Progress' },
    { id: 2, name: 'Write API', status: 'Completed' }
  ];
  
  // API endpoint
  app.get('/api/tasks', (req, res) => {
    res.json(tasks);  // Send JSON response
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
