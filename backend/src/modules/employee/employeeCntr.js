'use strict';

const employeeDb = require('./employeeDb');

module.exports.getEmployees = (req, res) => {
    employeeDb.getEmployees((err, employees)=>{
        if(err){
            return res.status(500).send({success:false, data:err});
        }
        return res.status(200).send({ success:true, data: employees });
    });
}

module.exports.saveEmployee = (req, res) => {
    employeeDb.saveEmployee(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data:err });
        }
        return res.status(200).send({ success: true, data: data });
    });
}

module.exports.updateEmployee = ((req, res)=>{
    employeeDb.updateEmployee(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data: err });
        }
        return res.status(200).send({ status:true, data: data });
    });
});