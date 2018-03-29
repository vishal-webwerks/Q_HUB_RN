'use strict';

const async = require('async');
const Tech_Model = require('./techModel');

module.exports.getTechnologies = (input, callback) => {

    Tech_Model.find({}, (err, technologies)=>{
        if(err){
            return callback(err);
        }
        return callback(null, technologies)
    })

}

module.exports.techSave = (input, callbackMain) => {

    async.waterfall([

        (callback) => {
            Tech_Model.count({ technology_name: input.technology_name }, (err, count)=>{
                if(err){
                    return callback(err);
                }
                if(count>0){
                    return callback('Technology already added!');
                }
                callback(null)
            })
        },
        (callback) => {
            let data = {
                technology_name: input.technology_name,
                technology_desc: input.technology_desc
            }
            let technology = new Tech_Model(data);
            technology.save(data, (err, employee)=>{
                if(err){
                    return callback(err);
                }
                callback(null, 'Technology saved');
            })
        }

    ], (error, success)=>{
        if(error){
            return callbackMain(error);
        }
        return callbackMain(null, success);
    });

}

module.exports.updateTech = (input, callbackMain) => {

    async.waterfall([

        (callback) => {
            Tech_Model.count({ technology_name: input.technology_name, 
                               _id:{ $ne:input._id } },
                            (err, count)=>{
                if(err){
                    return callback(err)
                }
                if(count>0){
                    return callback('Technology already added')
                }
                callback(null)
            })
        },
        (callback)=>{
            Tech_Model.findById(input._id, (err, technology)=>{
                if(err){
                    return callback(err);
                }
                callback(null, technology)
            })
        },
        (technology, callback)=>{
            technology.technology_name = input.technology_name;
            technology.technology_desc = input.technology_desc;
            technology.save((err, data)=>{
                if(err){
                    return callback(err)
                }
                callback(null, 'Technology updated')
            })
        }

    ], (error, success) => {
        if(error){
            return callbackMain(error)
        }
        return callbackMain(null, success)
    })

}