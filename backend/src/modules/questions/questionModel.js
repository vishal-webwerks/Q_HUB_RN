var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    question: String,
    client_id: String,
    technology_id: String,
    employee_id: String
});

let Question_Model  = mongoose.model('questions', questionSchema);

module.exports = Question_Model ;
