import axios from 'axios';
import {
    TECH_INIT,
    TECH_SET_PROP,
    TECH_SAVE,
    TECH_UPDATE,
    TECH_LIST,
    TECH_RESET_MODAL,
    TECH_SAVE_ERROR,
    TECH_UPDATE_ERROR
} from './ActionTypes';
import { API_URL } from '../../common/globals';

export const setTechProps = ({ prop, value }) => {
    return {
        type: TECH_SET_PROP,
        payload:{ prop, value }
    }
}

export const resetModal = () => {
    return {
        type: TECH_RESET_MODAL        
    }
}

export const techList = () => {
    return (dispatch) => {

        axios.get(API_URL+'getTechnologies', {
                    headers: { 'Cache-Control': 'no-cache' }
              })
             .then(function(response){
                 console.log(response.data.data);
                dispatch({
                    type: TECH_SET_PROP,
                    payload:{ prop:'technology_list', value:response.data.data }
                });
             })
             .catch(function(err){
                console.log(err);
             });

    }
}

export const saveTech = (data) => {

    return(dispatch) => {

        dispatch({ 
            type:TECH_SET_PROP, 
            payload:{prop:"modal_btn_loading", value:true} 
        });

        axios.post(API_URL+'saveTechnology', data,{
                headers: { 'Cache-Control': 'no-cache' }                
             }, data)
             .then(function(response){
                dispatch({ 
                    type:TECH_SAVE, 
                    payload:response 
                });      
             })
             .catch(function(err){
                dispatch({ 
                    type:TECH_SAVE_ERROR, 
                    payload:err 
                });
             });

    }

}

export const updateTech = (data) => {

    return(dispatch) => {

        dispatch({ 
            type:TECH_SET_PROP, 
            payload:{prop:"modal_btn_loading", value:true} 
        });

        axios.post(API_URL+'updateTechnology', data, {
                headers: { 'Cache-Control': 'no-cache' }
             })
             .then(function(response){
                dispatch({ 
                    type:TECH_UPDATE, 
                    payload:response 
                });      
             })
             .catch(function(err){
                dispatch({ 
                    type:TECH_UPDATE_ERROR, 
                    payload:err 
                });
             });

    }

}