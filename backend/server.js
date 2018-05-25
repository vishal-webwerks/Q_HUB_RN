'use strict';

//Node js project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./src/config/config');

const DB_URL = "mongodb://"+config.DB_USER+":"+config.DB_PASSWORD+"@ds133017.mlab.com:33017/"+config.DB_NAME;
mongoose.connect(DB_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;

app.set('port', config.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', 
    require('./src/modules/login/loginRoute'),
    require('./src/modules/employee/employeeRoute'),
    require('./src/modules/technology/techRoute'),
    require('./src/modules/client/clientRoute'),
    require('./src/modules/questions/questionRoute'),
    require('./src/modules/test/testRoute')
);

app.listen(app.get('port'), ()=>{
    console.log('App running on port : '+ app.get('port'));
});
module.exports = app;