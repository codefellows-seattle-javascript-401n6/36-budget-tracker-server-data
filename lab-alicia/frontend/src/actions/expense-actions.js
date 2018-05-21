export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const expenseCreate = expense => {
  return {type: EXPENSE_CREATE, payload: expense};
};

export const expenseUpdate = expense => {
  return {type: EXPENSE_UPDATE, payload: expense};
};

export const expenseDelete = expenseId => {
  return {type: EXPENSE_DELETE, payload: {id: expenseId}};
};