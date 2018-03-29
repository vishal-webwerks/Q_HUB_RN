var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String,
    email: String,
    designation: String,
    password: String
});

let Employee_Model  = mongoose.model('employees', employeeSchema);

module.exports = Employee_Model;
