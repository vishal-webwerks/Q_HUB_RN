'use strict';

const answerDb = require('./answerDb');

module.exports.saveAnswer = (req, res) => {
    answerDb.saveAnswer(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data:err });
        }
        return res.status(200).send({ success: true, data: data });
    });
}