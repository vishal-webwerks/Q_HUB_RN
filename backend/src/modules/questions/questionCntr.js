'use strict';

const questionDb = require('./questionDb');

module.exports.saveQuestions = (req, res) => {
    questionDb.saveQuestions(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data:err });
        }
        return res.status(200).send({ success: true, data: data });
    });
}

module.exports.updateQuestion = (req, res) => {
    questionDb.updateQuestion(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data:err });
        }
        return res.status(200).send({ success: true, data: data });
    });
}

module.exports.getQuestions = (req, res) => {
    questionDb.getQuestions(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data:err });
        }
        return res.status(200).send({ success: true, data: data });
    });
}