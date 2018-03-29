'use strict';

const express = require('express');
const router = express.Router();
const questionCntr = require('./questionCntr');
const answerCntr = require('./answer/answerCntr');

router.post('/saveQuestions', questionCntr.saveQuestions);
router.post('/updateQuestion', questionCntr.updateQuestion);
router.get('/getQuestions', questionCntr.getQuestions);
router.post('/saveAnswer', answerCntr.saveAnswer);

module.exports = router;