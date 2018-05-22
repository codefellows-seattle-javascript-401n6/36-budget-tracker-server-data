import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from '../actions/expenseActions';


const initialState = {
  expenses: []
}

const expenseReducer = (state = initialState, action) => {
  let expenses = [];

  if(state === undefined) {
    return initialState;
  }

  switch(action.type) {

    case EXPENSE_CREATE:
      return { ...state, expenses:  state.expenses.concat(action.payload) };

    case EXPENSE_DELETE:
      expenses = state.expenses.filter(expense => expense.id !== action.payload);
      return { expenses };

    case EXPENSE_UPDATE:
      expenses = state.expenses.map(expense => {
        if(expense.id === action.payload.id) {
          return { ...expense, ...action.payload }
        }
        return expense;
      });

      return { ...state, expenses };

    default:
      return state;
  }
}

export default expenseReducer;
