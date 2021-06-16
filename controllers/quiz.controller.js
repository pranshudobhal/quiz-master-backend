const { Quiz } = require('../models/quiz.model');

const getAllQuizzes = async (req, res) => {
  try {
    const allQuizzes = await Quiz.find({}).select('_id name imageURL description');
    res.json({ success: true, allQuizzes });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizzes!', errorMessage: error.message });
  }
};

const getQuizByID = async (req, res) => {
  try {
    const { quizID } = req.params;
    const quiz = await Quiz.find({ _id: quizID });
    res.json({ success: true, quiz });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizz by ID!', errorMessage: error.message });
  }
};

module.exports = { getAllQuizzes, getQuizByID };
