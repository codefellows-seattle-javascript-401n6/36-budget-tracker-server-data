import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE,
} from '../actions/expense-actions.js';
import uuidv4 from 'uuid/v4';

const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  let newState = {};
  let expenses = [];

  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
  case EXPENSE_CREATE:
    action.payload.id = uuidv4();
      let newExpenses = state.expenses.concat(action.payload);
      let updatedState = {...state, expenses: newExpenses}
      return updatedState;

  case EXPENSE_UPDATE:
    expenses = state.expenses.map(expense => {
      if(expenses.id === action.payload.id) {
        return {...expense, ...action.payload};
      }
      return expense;
    });
    return {...state, expenses};

  case EXPENSE_DELETE:
    expenses = state.expenses.filter(expense => {
      return action.payload.id !== expense.id;
    });
    return {...state, expenses};

  default: 
    return state;
  }
};

export default expenseReducer;