import {
    CLIENT_INIT,
    CLIENT_SET_PROP,
    CLIENT_SAVE,
    CLIENT_UPDATE,
    CLIENT_RESET_MODAL,
    CLIENT_SAVE_ERROR,
    CLIENT_UPDATE_ERROR
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    _id: '',
    client_name: '',
    client_info: '',
    modal_btn_loading:false,
    modal_visibility:false,
    success_msg:'',
    error_msg:'',
    modal_type:'save',
    client_list:[]
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type){

        case CLIENT_SET_PROP:
                return { ...state, [action.payload.prop]: action.payload.value };

        case CLIENT_SAVE:
                return { ...state, success_msg:'Technology saved!', error_msg:'', modal_btn_loading:false, modal_visibility: false };
        
        case CLIENT_SAVE_ERROR:
                return { ...state, error_msg:'Error in saving', success_msg:'', modal_btn_loading:false };

        case CLIENT_UPDATE:
                return { ...state, success_msg:'Technology updated!', error_msg:'', modal_btn_loading:false, modal_visibility: false };
        
        case CLIENT_UPDATE_ERROR:
                return { ...state, error_msg:'Error in updating', success_msg:'', modal_btn_loading:false };
            
        case CLIENT_RESET_MODAL:
                return { 
                        ...state,
                        _id: '',
                        client_name: '',
                        client_info: '',
                        modal_type:'save'
                }

        case CLIENT_INIT: 
        default: 
               var client_list = (state.client_list.length==0) ? [] : state.client_list;
               return { ...INITIAL_STATE, client_list: client_list };

    }

}