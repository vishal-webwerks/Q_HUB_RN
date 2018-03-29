'use strict';

const express = require('express');
const router = express.Router();
const loginCntr = require('./loginCntr');

router.post('/login', loginCntr.login);

module.exports = router;