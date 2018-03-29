'use strict';
const clientDb = require('./clientDb');

module.exports.saveClient = (req, res)=>{
    clientDb.saveClient(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data: err });
        }
        return res.status(200).send({ success: true, data: data });
    })
}

module.exports.updateClient = (req, res)=>{
    clientDb.updateClient(req.body, (err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data: err });
        }
        return res.status(200).send({ success: true, data: data });
    })
}

module.exports.getClients = (req, res)=>{
    clientDb.getClients((err, data)=>{
        if(err){
            return res.status(500).send({ success:false, data: err });
        }
        return res.status(200).send({ success: true, data: data });
    })
}