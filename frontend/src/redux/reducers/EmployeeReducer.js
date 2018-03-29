import { EMP_INIT, EMP_CREATE_SUCCESS, EMP_CREATE_ERROR, EMP_CREATE_INIT } from '../actions/ActionTypes';

const INITIAL_STATE = {
    name:'',
    email:'',
    designation:'',
    password:'',
    success_msg:'',
    err_msg:'',
    loading:false
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        
        case EMP_INIT: 
            return { ...state, [action.payload.prop]: action.payload.value };

        case EMP_CREATE_INIT:
            return { ...state, loading: true, success_msg:'', err_msg:'' };

        case EMP_CREATE_SUCCESS:
            return { ...state, success_msg: 'Employee Saved', loading: false };

        case EMP_CREATE_ERROR:
            return { ...state, err_msg: 'Not Saved', loading: false };

        default: 
            return state || INITIAL_STATE;

    }

}