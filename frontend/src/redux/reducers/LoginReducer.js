import { LOGIN_INIT, 
         LOGIN_RESET,
         BEFORE_LOGIN_STATE, 
         LOGIN_SUCCESS, 
         LOGIN_ERROR } from '../actions/ActionTypes';

const INITIAL_STATE = {
    email:'',
    password:'',
    success_msg:'',
    err_msg:'',
    loading:false,
    auth:{}
};

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {

        case LOGIN_INIT:
                return { ...state, [action.payload.prop]: action.payload.value };                       

        case BEFORE_LOGIN_STATE :
                return { ...state, loading:true, success_msg:'', err_msg:'' };

        case LOGIN_SUCCESS : 
                return { ...state, success_msg: 'Login successful', loading:false, auth: action.payload.response.data.data };

        case LOGIN_ERROR:
                return { ...state, err_msg: 'Login failed', loading:false };            

        case LOGIN_RESET:
                return { ...state, email:'', password:'', success_msg:'', err_msg:'', loading:false };
        default: 
                return state || INITIAL_STATE;

    }

}