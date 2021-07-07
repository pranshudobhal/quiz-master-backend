const mongoose = require('mongoose');
const { Schema } = mongoose;
const allQuizzes = require('./quiz.data');

const optionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  isRight: {
    type: Boolean,
    required: true,
  },
});

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  negativePoints: Number,
  options: {
    type: [optionSchema],
    default: undefined,
    required: true,
  },
});

const quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  playTime: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  totalPoints: {
    type: Number,
    required: true,
  },
  questions: {
    type: [questionSchema],
    default: undefined,
    required: true,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

async function addQuizToCollection() {
  try {
    allQuizzes.forEach(async (quiz) => {
      const newQuiz = new Quiz(quiz);
      await newQuiz.save();
    });
    console.log('Quiz Data added successfully to database');
  } catch (error) {
    console.log('Error adding quiz data to database');
  }
}

module.exports = { Quiz, addQuizToCollection };
