'use strict';

const techDb = require('./techDb');

module.exports.getTechnologies = (req, res) => {
    techDb.getTechnologies(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({success: false, data: err})
        }
        return res.status(200).send({success: true, data: data});
    })
}

module.exports.saveTechnology = (req, res) => {
    techDb.techSave(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({success: false, data: err});
        }
        return res.status(200).send({status: true, data: data});
    });
}

module.exports.updateTechnology = (req, res) => {
    techDb.updateTech(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({success: false, data: err})
        }
        return res.status(200).send({success: true, data: data});
    })
}