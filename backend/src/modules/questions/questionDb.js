var bcrypt = require('bcrypt');
var async = require('async');
var config = require('../../config/config');
var Question_Model = require('./questionModel');
var Answer_Model = require('./answerModel');

module.exports.saveQuestions = (input, callbackMain) => {

    console.log(input);

    let data = {        
        client_id: input.client_id,
        technology_id: input.technology_id,
        employee_id: input.employee_id
    }

    async.each(input.temp_que_list, (item, callback)=>{

        data.question = item.question;

        let question = new Question_Model(data);
        question.save((err, data)=>{
            if(err){
                return callback(err)
            }

            if(item.answer!=''){
                let answer_data = {
                    question_id: data._id,
                    answer: item.answer,
                }
    
                let answer = new Answer_Model(answer_data);
                answer.save((err, data)=>{
                    if(err){
                        return callback(err)
                    }
                    callback()
                });
            }
            else{
                callback()
            }            

        })

    }, (err)=>{
        if(err){
            return callbackMain(err)
        }
        return callbackMain(null, 'Questions saved')
    })

}

module.exports.updateQuestion = (input, callbackMain) => {

    let data = {
        question: input.question,
        client_id: input.client_id,
        technology_id: input.technology_id,
        employee_id: input.employee_id
    }

    async.waterfall([
        (callback)=>{
            Question_Model.findById(input._id, (err, question) => {
                if(err){
                    return callback(err)
                }
                callback(null, question)
        
            })
        },
        (question, callback)=>{
            question.question= input.question;
            question.client_id= input.client_id;
            question.technology_id= input.technology_id;
            question.employee_id= input.employee_id;
            question.save((err, data)=>{
                if(err){
                    return callback(err)
                }
                callback(null, 'Question updated')
            })
        }
    ], (error, success)=>{
        if(error){
            callbackMain(error)
        }
        callbackMain(null, success)
    });   

}

module.exports.getQuestions = (input, callbackMain) => {

    async.waterfall([
        (callback)=>{
            Question_Model.find({}, (err, questionsList)=>{

                if(err){
                    return callback(err)
                }
                questionsList = JSON.parse(JSON.stringify(questionsList));                
                callback(null, questionsList)
        
            })
        },
        (questionsList, callback)=>{

            Answer_Model.find({}, (err, answersList)=>{
                if(err){
                    return callbackInner(err)
                }                
                questionsList.map((element, index)=>{
                    var temp = answersList.filter((item)=>{ return element._id==item.question_id })                                         
                    questionsList[index].answers = temp;
                })
                callback(null, questionsList)
            })               
            
        }
    ], (error, success)=>{
        if(error){
            callbackMain(error)
        }
        callbackMain(null, success)
    })   

}