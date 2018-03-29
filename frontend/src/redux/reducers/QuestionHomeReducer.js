import { 
    QUE_SET_PROP,
    QUE_SAVE,
    QUE_SAVE_ERROR,
    NEW_QUE_RESET,
    NEW_ANSWER
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    temp_que_list:[],
    temp_que:'',
    temp_ans:'',
    client_id:'',
    technology_id:'',
    save_btn_loading: false,
    save_success_msg:'',
    save_error_msg:'',
    que_list:[]
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type){

        case QUE_SET_PROP:
            return { ...state, [action.payload.prop]:action.payload.value };

        case QUE_SAVE:
            return { ...state, 
                     save_btn_loading:false, 
                     save_success_msg:'Questions saved successfully', 
                     save_error_msg: '' 
            };
        
        case QUE_SAVE_ERROR:
            return { ...state, 
                     save_btn_loading:false, 
                     save_success_msg:'', 
                     save_error_msg: 'Error in saving' 
            };

        case NEW_QUE_RESET:
            return {
                ...state,
                temp_que_list:[],
                temp_que:'',
                temp_ans:'',
                client_id:'',
                technology_id:'',
                save_btn_loading: false,
                save_success_msg:'',
                save_error_msg:''
            }

        default:
            return state || INITIAL_STATE;

    }

}