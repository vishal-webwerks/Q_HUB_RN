var bcrypt = require('bcrypt');
var async = require('async');
var config = require('../../config/config');
var Employee_Model = require('./employeeModel');

module.exports.getEmployees = (callback) => {

    Employee_Model.find({}, (err, employees)=>{
        if(err){
            callback(err);
        }
        callback(null, employees);
    })

}

module.exports.saveEmployee = (input, callbackMain) => {

    async.waterfall([
        //Hashing the password
        (callback)=>{
            bcrypt.hash(input.password, config.SALT_ROUNDS, function(err, hash) {
                callback(null, hash);
            });
        },
        //Getting count of email
        (hash, callback)=>{

            Employee_Model.count({email:input.email}, (err, count)=>{
                if(err){
                    return callback(err);
                }
                if(count>0){
                    return callback('Email already exist');
                }
                callback(null, hash);
            });

        },
        //Getting count of saving employee
        (hash, callback) =>{
            let data = {
                name: input.name,
                email: input.email,
                designation: input.designation,
                password: hash
            }
            let employee = new Employee_Model(data);
            employee.save(data, function(err, employee){
                if(err){
                    return callback(err);
                }
                return callback(null, "Employee saved");
            });
        }
    ], (error, success) => {
        return callbackMain(error, success);
    });

}

module.exports.updateEmployee = (input, callbackMain) => {

    async.waterfall([
        (callback) => {
            Employee_Model.count({
                                    email:input.email,
                                    _id:{ $ne:input._id }
                                }, (err, count) => {
                if(err){
                    return callback(err);
                }
                if(count>0){
                    return callback("Email already exists");
                }
                callback(null);
            })
        },
        (callback) => {

            Employee_Model.findById(input._id, (err, employee)=>{
                if(err){
                    return callback(err);
                }
                else{
                    callback(null, employee);
                }
            })

        },
        (employee, callback) => {

            employee.name = input.name;
            employee.designation = input.designation;
            employee.email = input.email;

            employee.save((err, todo)=>{
                if(err){
                    return callback(err);
                }
                callback(null, "Employee updated");
            });

        }
    ], (error, success) => {
        return callbackMain(error, success);
    });

}