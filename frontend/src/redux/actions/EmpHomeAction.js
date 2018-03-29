import { Alert } from 'react-native';
import axios, { create } from 'axios';
import { API_URL } from "../../common/globals";
import {
    EMP_HOME_INIT,
    EMP_HOME_LIST,
    EMP_UPDATE_FORM_SET,
    EMP_HOME_SET_PROP
} from './ActionTypes';

export const empList = () => {

    return (dispatch) => {

       var instance = axios.create();
       axios.get(API_URL+'getEmployee',{
                    headers: {
                    'Cache-Control': 'no-cache'
                    }
                })
        .then(function (response) {
            console.log(response);
            //var response = JSON.parse(response);
            dispatch({ 
                type:EMP_HOME_LIST,
                payload: { emp_list:response.data.data } 
            }) 
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export const empUpdateFormSet = (item) => {
    return {
        type: EMP_UPDATE_FORM_SET,
        payload: item
    }
}

export const setEmpHomeProp = ({ prop, value }) => {
    return {
        type: EMP_HOME_SET_PROP,
        payload: { prop, value }
    }
}

export const empUpdate = (data) => {

    return (dispatch) => {

        dispatch({ type:EMP_HOME_SET_PROP, payload:{prop:'update_btn_loading', value:true} });

        axios.post(API_URL+'updateEmployee', data, {
            headers: {
            'Cache-Control': 'no-cache'
            }
        })
        .then(function (response) {
            Alert.alert(
                'Success',
                'Update successfull',                
                [
                    {text: 'OK', onPress: () => update_callback(true, dispatch)}
                ]
            )

            var instance = axios.create();
            axios.get(API_URL+'getEmployee',{
                            headers: { 'Cache-Control': 'no-cache' }
                        })
                .then(function (response) {
                    dispatch({ 
                        type:EMP_HOME_LIST,
                        payload: { emp_list:response.data.data } 
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            
        })
        .catch(function (error) {
            Alert.alert(
                'Error',
                'Update failed',
                [
                    {text: 'OK', onPress: () => { update_callback(false, dispatch)  }}
                ]
            )            
        });

    }

}

const update_callback = (success=false, dispatch) => {
    if(success){
        dispatch({ type:EMP_HOME_SET_PROP, payload:{prop:'update_btn_loading', value:false} });
        dispatch({ type:EMP_HOME_SET_PROP, payload:{prop:'modal_visibility', value:false} });
        empList();
    }
    else{
        dispatch({ type:EMP_HOME_SET_PROP, payload:{prop:'update_btn_loading', value:false} });
    }
}