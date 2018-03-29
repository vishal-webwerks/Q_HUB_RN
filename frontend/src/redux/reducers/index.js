import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import EmployeeReducer from './EmployeeReducer';
import EmpHomeReducer from './EmpHomeReducer';
import TechnologyHome from './TechnologyHomeReducer';
import ClientsHomeReducer from './ClientsHomeReducer';
import QuestionHomeReducer from './QuestionHomeReducer';


export default combineReducers({
    loginData: LoginReducer,
    employee: EmployeeReducer,
    empHome: EmpHomeReducer,
    technologyData: TechnologyHome,
    clientData: ClientsHomeReducer,
    questionData: QuestionHomeReducer
});