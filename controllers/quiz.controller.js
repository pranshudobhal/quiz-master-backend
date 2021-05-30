const { Quiz } = require('../models/quiz.model');

const getAllQuizzes = async (req, res) => {
  try {
    const allQuizzes = await Quiz.find({});
    res.json({ success: true, allQuizzes });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizzes', errorMessage: error.message });
  }
};

module.exports = { getAllQuizzes };
