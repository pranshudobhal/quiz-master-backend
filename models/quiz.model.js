const mongoose = require('mongoose');
const { Schema } = mongoose;
const allQuizzez = require('./quiz.data');

const optionSchema = new Schema({
  text: String,
  isRight: Boolean,
});

const questionSchema = new Schema({
  question: String,
  points: Number,
  negativePoints: Number,
  options: {
    type: [optionSchema],
    default: undefined,
  },
});

const quizSchema = new Schema({
  name: String,
  playTime: Number,
  totalPoints: Number,
  questions: {
    type: [questionSchema],
    default: undefined,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

async function addQuizToCollection() {
  try {
    allQuizzez.forEach(async (quiz) => {
      const newQuiz = new Quiz(quiz);
      await newQuiz.save();
    });
    console.log('Data added successfully to database');
  } catch (error) {
    console.log('Error adding data to database');
  }
}

module.exports = { Quiz, addQuizToCollection };
