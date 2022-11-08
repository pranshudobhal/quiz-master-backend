const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectToDatabase } = require('./database/database');
const { addQuizToCollection } = require('./models/quiz.model');

const { verifyAuth } = require('./authentication');

const quizRouter = require('./routers/quiz.router');
const loginRouter = require('./routers/login.router');
const signupRouter = require('./routers/signup.router');
const userRouter = require('./routers/user.router');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cors());

connectToDatabase();

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/quiz', quizRouter);
app.use('/user', verifyAuth, userRouter);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Quiz Master API' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route does not exist!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Error occurred on server side!', errMessage: err.message });
});

app.listen(port, () => {
  console.log('Server ONLINE and running at PORT ' + port);
});
