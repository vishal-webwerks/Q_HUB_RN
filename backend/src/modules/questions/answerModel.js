'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerSchema = new Schema({
    question_id: String,
    answer: String,
    employee_id: String
});

const Answer_Model = mongoose.model('answers', answerSchema);

module.exports = Answer_Model;