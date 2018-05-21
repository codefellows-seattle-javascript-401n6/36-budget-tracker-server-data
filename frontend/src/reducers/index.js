import {combineReducers} from 'redux';
import categoryReducer from './category-app';
import expenseReducer from './expense-reducer';

export default combineReducers({
  categoryStore: categoryReducer,
  expenseStore: expenseReducer
});