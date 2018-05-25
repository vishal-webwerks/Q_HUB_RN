'use strict';

const async = require('async');
const Client_Model = require('./clientModel');

module.exports.getClients = (callback) => {

    Client_Model.find({}, (err, employees)=>{
        if(err){
            return callback(err);
        }
        return callback(null, employees);
    })

}

module.exports.saveClient = (input, callbackMain) => {

    async.waterfall([
        (callback)=>{

            Client_Model.count({client_name: input.client_name}, (err, count)=>{
                if(err){
                    return callback(err)
                }
                if(count>0){
                    return callback('Client already added')
                }
                callback(null)
            })

        },
        (callback)=>{

            let data = {
                client_name: input.client_name,
                client_info: input.client_info
            }

            let clientEntry = new Client_Model(data);
            clientEntry.save((err, client)=>{
                if(err){
                    return callback(err)
                }
                callback(null, 'Client saved!')
            });

        }
    ],
    (error, success)=>{
        if(error){
            return callbackMain(error)
        }
        return callbackMain(null, success);
    })

}

module.exports.updateClient = (input, callbackMain) => {

    async.waterfall([
        (callback)=>{

            Client_Model.count({client_name: input.client_name, _id:{$ne:input._id}}, (err, count)=>{
                if(err){
                    return callback(err)
                }
                if(count>0){
                    return callback('Client already added')
                }
                callback(null)
            })

        },
        (callback) => {

            Client_Model.findById(input._id, (err, client)=>{
                if(err){
                    return callback(err);
                }
                else{
                    callback(null, client);
                }
            })

        },
        (client, callback)=>{

            client.client_name = input.client_name,
            client.client_info = input.client_info

            client.save((err, client)=>{
                if(err){
                    return callback(err)
                }
                callback(null, 'Client updated!')
            });

        }
    ],
    (error, success)=>{
        if(error){
            return callbackMain(error)
        }
        return callbackMain(null, success);
    })

}