const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Quiz } = require('../models/quiz.model');
const { getAllQuizzes, getQuizByID } = require('../controllers/quiz.controller');
const { verifyAuth } = require('../authentication');

router.get('/', getAllQuizzes);

router.get('/:quizID', verifyAuth, getQuizByID);

module.exports = router;
