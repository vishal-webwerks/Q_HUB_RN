import axios from 'axios';
import {
    CLIENT_INIT,
    CLIENT_SET_PROP,
    CLIENT_SAVE,
    CLIENT_UPDATE,
    CLIENT_LIST,
    CLIENT_RESET_MODAL,
    CLIENT_SAVE_ERROR,
    CLIENT_UPDATE_ERROR
} from './ActionTypes';
import { API_URL } from '../../common/globals';

export const setClientProps = ({ prop, value }) => {
    return {
        type: CLIENT_SET_PROP,
        payload:{ prop, value }
    }
}

export const resetModal = () => {
    return {
        type: CLIENT_RESET_MODAL
    }
}

export const clientList = () => {

    return (dispatch) => {

        axios.get(API_URL+'getClients', {
                    headers: { 'Cache-Control': 'no-cache' }
              })
             .then(function(response){
                dispatch({
                    type: CLIENT_SET_PROP,
                    payload:{ prop:'client_list', value:response.data.data }
                });
             })
             .catch(function(err){

             });

    }
}

export const saveClient = (data) => {

    return(dispatch) => {

        dispatch({
            type:CLIENT_SET_PROP,
            payload:{prop:"modal_btn_loading", value:true}
        });

        axios.post(API_URL+'saveClient', data,{
                headers: { 'Cache-Control': 'no-cache' }
             })
             .then(function(response){
                dispatch({
                    type:CLIENT_SAVE,
                    payload:response
                });
             })
             .catch(function(err){
                dispatch({
                    type:CLIENT_SAVE_ERROR,
                    payload:err
                });
             });

    }

}

export const updateClient = (data) => {

    return(dispatch) => {

        dispatch({
            type:CLIENT_SET_PROP,
            payload:{prop:"modal_btn_loading", value:true}
        });

        axios.post(API_URL+'updateClient', data,{
                headers: { 'Cache-Control': 'no-cache' }
             })
             .then(function(response){
                dispatch({
                    type:CLIENT_UPDATE,
                    payload:response
                });
             })
             .catch(function(err){
                dispatch({
                    type:CLIENT_UPDATE_ERROR,
                    payload:err
                });
             });

    }

}