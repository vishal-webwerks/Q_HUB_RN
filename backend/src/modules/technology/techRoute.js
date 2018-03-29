'use strict';

const express = require('express');
const router = express.Router();
const techCntr = require('./techCntr');


router.get('/getTechnologies', techCntr.getTechnologies);
router.post('/saveTechnology', techCntr.saveTechnology);
router.post('/updateTechnology', techCntr.updateTechnology);

module.exports = router;