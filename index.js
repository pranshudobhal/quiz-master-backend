const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

/**
 * TODO:
 * 1. Connect to Database
 * 2. Auth handler
 * 3. Individual routes
 */

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
