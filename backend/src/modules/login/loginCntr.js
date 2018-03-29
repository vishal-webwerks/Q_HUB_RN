'use strict';

const loginDb = require('./loginDb');

module.exports.login = ((req, res)=>{
    loginDb.login(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success: false, data: err });
        }
        return res.status(200).send({ success: true, data: data });
    });
});