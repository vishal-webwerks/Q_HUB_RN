'use strict';

const express = require('express');
const router = express.Router();


router.post('/test1', (req, res)=>{
    console.log('Data', req.body);
});

module.exports = router;