import axios from 'axios';
import { Alert } from 'react-native';
import { 
    QUE_SET_PROP,
    QUE_SAVE,
    QUE_SAVE_ERROR,
    NEW_QUE_RESET,
    NEW_ANSWER
} from './ActionTypes';
import { API_URL } from '../../common/globals';

export const questionPropSet = ({prop, value}) => {
    return {
        type: QUE_SET_PROP,
        payload: {prop, value}
    }
}

export const newQueReset = () => {
    return {
        type: NEW_QUE_RESET,
        payload: {}
    }
}

export const questionsSave = ({ client_id, technology_id, employee_id, temp_que_list }) => {

    var form_data = { client_id, technology_id, employee_id, temp_que_list };
    return(dispatch) => {

        dispatch({ 
            type:QUE_SET_PROP, 
            payload:{prop:"save_btn_loading", value:true} 
        });

        axios.post(API_URL+'saveQuestions', form_data,{
                headers: { 'Cache-Control': 'no-cache' }
            })
            .then(function(response){ 
                dispatch({ 
                    type:QUE_SAVE, 
                    payload:response.data.data 
                });                      
                    
                Alert.alert(
                    'Success',
                    'Saved successfully',
                    [ {text: 'OK', onPress: () => { _afterSaveAction(dispatch) }} ]
                )

                getQuestions(dispatch);
            })
            .catch(function(err){
                dispatch({ 
                    type:QUE_SAVE_ERROR, 
                    payload:err 
                });
                Alert.alert( 'Error', 'Not saved!' )
            });

    }
}

const _afterSaveAction = (dispatch) => {
    dispatch({
        type: NEW_QUE_RESET,
        payload: {}
    });     
}

export const queList = () => {
    return(dispatch) => {

        axios.get(API_URL+'getQuestions',{
                headers: { 'Cache-Control': 'no-cache' }
             })
             .then(function(response){
                dispatch({ 
                    type:QUE_SET_PROP, 
                    payload:{ "prop":"que_list", value:response.data.data }
                });      
             })
             .catch(function(err){ });

    }
}

export const saveAns = (data) => {
    return (dispatch) => {
        axios.post(API_URL+'saveAnswer', data, {
            headers: { 'Cache-Control': 'no-cache' }
        })
        .then(function(response){           
            Alert.alert(
                'Success',
                'Saved successfully',
                [ {text: 'OK'} ]
            );
            getQuestions(dispatch);
        })
        .catch(function(err){
            Alert.alert( 'Error', 'Not saved!' )
        });  
    }
} 

getQuestions = (dispatch) => {
    axios.get(API_URL+'getQuestions',{
        headers: { 'Cache-Control': 'no-cache' }
     })
     .then(function(response){
        dispatch({ 
            type:QUE_SET_PROP, 
            payload:{ "prop":"que_list", value:response.data.data }
        });      
     })
     .catch(function(err){ });
}