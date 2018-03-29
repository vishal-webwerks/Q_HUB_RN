import axios from 'axios';
import { EMP_INIT, EMP_CREATE_SUCCESS, EMP_CREATE_ERROR, EMP_CREATE_INIT } from './ActionTypes';
import { API_URL } from "../../common/globals";

export const employeeInit = ({ prop, value }) => {
    return {
        type: EMP_INIT,
        payload: { prop, value }
    }
}

export const employeeSave = ({ name, email, designation, password }) => {

    const form_data = { name, email, designation, password };

    return (dispatch) => {

        dispatch({ type:EMP_CREATE_INIT });

        axios.post(API_URL+'saveEmployee', form_data,{
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        .then(function (response) {
            dispatch( { type:EMP_CREATE_SUCCESS, payload: { response } } ) 
        })
        .catch(function (error) {
            dispatch( { type:EMP_CREATE_ERROR, payload: { error } } ) 
        });
    }

}