const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Quiz } = require('../models/quiz.model');
const { getAllQuizzes } = require('../controllers/quiz.controller');

router.get('/', getAllQuizzes);

module.exports = router;
