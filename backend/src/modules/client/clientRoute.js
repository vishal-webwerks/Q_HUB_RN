'use strict';

const express = require('express');
const router = express.Router();
const clientCntr = require('./clientCntr');

router.post('/saveClient', clientCntr.saveClient);
router.post('/updateClient', clientCntr.updateClient);
router.get('/getClients', clientCntr.getClients);

module.exports = router;