var bcrypt = require('bcrypt');
var async = require('async');
var config = require('../../../config/config');
var Answer_Model = require('../answerModel');

module.exports.saveAnswer = (input, callbackMain) => {

    let answer = new Answer_Model(input);
    answer.save((err, data)=>{
        if(err){
            return callbackMain(err)
        }
        callbackMain(null,'Answer saved!')
    });

}