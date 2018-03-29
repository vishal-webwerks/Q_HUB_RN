'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var clientSchema = new Schema({    
    client_name: String,
    client_info: String,
});

let Client_Model = mongoose.model('clients', clientSchema);

module.exports = Client_Model;