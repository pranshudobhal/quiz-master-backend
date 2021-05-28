const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase } = require('./database/database');
const { addQuizToCollection } = require('./models/quiz.model');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

/**
 * TODO:
 * 1. Connect to Database -- DONE
 * 2. Auth handler
 * 3. Individual routes
 */

connectToDatabase();

/**
 * Run addQuizToCollection() only when adding new data to quiz JSON
 */
addQuizToCollection();

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Quiz Master API' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route does not exist!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Error occurred on server side!', errMessage: err.message });
});

app.listen(PORT, () => {
  console.log('Server ONLINE and running at PORT ' + PORT);
});
