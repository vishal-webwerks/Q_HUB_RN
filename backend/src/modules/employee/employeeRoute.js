'use strict';

const express = require('express');
const router = express.Router();
const employeeCntr = require('./employeeCntr');

router.get('/getEmployee', employeeCntr.getEmployees);
router.post('/saveEmployee', employeeCntr.saveEmployee);
router.post('/updateEmployee', employeeCntr.updateEmployee);

module.exports = router;