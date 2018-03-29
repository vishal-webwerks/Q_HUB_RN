'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let techSchema = new Schema({
    technology_name: String,
    technology_desc: String,
});

const Tech_Model = mongoose.model('technologies', techSchema);

module.exports = Tech_Model;