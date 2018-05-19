import {combineReducers} from 'redux';
import budgetReducer from './budget-app';
import expenseReducer from './expense-app';

export default combineReducers({
 budgetReducer,
 expenseReducer
})