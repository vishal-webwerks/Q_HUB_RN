import {
    TECH_INIT,
    TECH_SET_PROP,
    TECH_SAVE,
    TECH_UPDATE,
    TECH_RESET_MODAL,
    TECH_SAVE_ERROR,
    TECH_UPDATE_ERROR
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    _id: '',
    technology_name: '',
    technology_desc: '',
    modal_btn_loading:false,
    modal_visibility:false,
    success_msg:'',
    error_msg:'',
    modal_type:'save',
    technology_list:[]
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type){

        case TECH_SET_PROP:
                return { ...state, [action.payload.prop]: action.payload.value };

        case TECH_SAVE:
                return { ...state, success_msg:'Technology saved!', error_msg:'', modal_btn_loading:false, modal_visibility: false };
        
        case TECH_SAVE_ERROR:
                return { ...state, error_msg:'Error in saving', success_msg:'', modal_btn_loading:false };

        case TECH_UPDATE:
                return { ...state, success_msg:'Technology updated!', error_msg:'', modal_btn_loading:false, modal_visibility: false };
        
        case TECH_UPDATE_ERROR:
                return { ...state, error_msg:'Error in updating', success_msg:'', modal_btn_loading:false };
            
        case TECH_RESET_MODAL:
                return { 
                        ...state,
                        _id: '',
                        technology_name: '',
                        technology_desc: '',
                        modal_type:'save'
                }

        case TECH_INIT: 
        default: 
                var technology_list = (state.technology_list.length==0) ? [] : state.technology_list;
                return { ...INITIAL_STATE, technology_list: technology_list };

    }

}