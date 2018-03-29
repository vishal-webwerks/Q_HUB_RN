import {
    EMP_HOME_INIT,
    EMP_HOME_LIST,
    EMP_UPDATE_FORM_SET,
    EMP_HOME_SET_PROP
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    _id: '',                     
    name: '',
    email: '',
    designation: '',
    update_btn_loading: false,
    modal_visibility: false,
    update_error: false,
    update_success: false,
    emp_list:[]
}

export default (state=INITIAL_STATE, action) => {


    switch(action.type){

        case EMP_HOME_LIST:
                return { ...state, emp_list: action.payload.emp_list };
        
        case EMP_UPDATE_FORM_SET:
                return { ...state, 
                         _id: action.payload._id,                     
                         name: action.payload.name,
                         email: action.payload.email,
                         designation: action.payload.designation,
                         modal_visibility: true
                }

        case EMP_HOME_SET_PROP:
                return { ...state, [action.payload.prop]:action.payload.value }

        case EMP_HOME_INIT:
                return INITIAL_STATE;
        default:
                return state || INITIAL_STATE;

    }

}