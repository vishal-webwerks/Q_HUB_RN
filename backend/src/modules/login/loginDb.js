'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const async = require('async');
const Employee_Model = require('../employee/employeeModel');

module.exports.login = ((input, callbackMain) => {

    async.waterfall([

        (callback)=>{
            Employee_Model.findOne({ email:input.email }, (err, employee)=>{
                if(err){
                    return callback(err);
                }
                if(employee){
                    callback(null, employee);
                }
                else{
                    return callback("Invalid email address");
                }
                
            })
        },
        (employee, callback) => {
            let hash = employee.password;
            bcrypt.compare(input.password, hash, (err, res)=>{
                if(err){
                    return callback(err);
                }
                if(res){
                    callback(null, employee);
                }
                else{
                    return callback('Invalid password');
                }
            });
        },
        (employee, callback) => {
            delete employee.password;
            
            let token = jwt.sign({
                data: input.email
            }, 'secret', { expiresIn: 60 * 60 });
            callback(null, {msg: 'Login successfull', token:token, user_info:employee});
        }

    ], (error, success)=>{
        return callbackMain(error, success);
    });    

});