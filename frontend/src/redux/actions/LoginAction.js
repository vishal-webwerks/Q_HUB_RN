import axios from 'axios';
import { LOGIN_INIT, 
        BEFORE_LOGIN_STATE, 
        LOGIN_RESET,
        LOGIN_SUCCESS, 
        LOGIN_ERROR } from '../actions/ActionTypes';
import { API_URL } from "../../common/globals";

export const loginInit = ({ prop, value }) => {
    return {
        type: LOGIN_INIT,
        payload: { prop, value }
    }
}

export const loginReset = () => {
    return {
        type: LOGIN_RESET
    }
}

export const loginAction = ({ email, password }) => {

    var form_data = { email, password };

    return(dispatch) => {
        dispatch({ type: BEFORE_LOGIN_STATE });   
        axios.post(API_URL+'login', form_data, {
            headers: {
            'Cache-Control': 'no-cache'
            }
        })
        .then(function (response) {
            dispatch( { type:LOGIN_SUCCESS, payload: { response } } ) 
        })
        .catch(function (error) {
            console.log(error);
            dispatch( { type:LOGIN_ERROR, payload: { error } } ) 
        }); 
    }    

}