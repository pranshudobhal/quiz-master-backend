const mongoose = require('mongoose');
const { Schema } = mongoose;
const allQuizzez = require('./quiz.data');

const questionSchema = new Schema({
  question: String,
  points: Number,
  negativePoints: Number,
  options: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Option' },
    },
  ],
});

const optionSchema = new Schema({
  text: String,
  isRight: Boolean,
});

const quizSchema = new Schema({
  name: String,
  playTime: Number,
  totalPoints: Number,
  questions: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Question' },
    },
  ],
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
