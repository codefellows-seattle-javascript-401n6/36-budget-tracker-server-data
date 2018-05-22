export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const createExpense = expense => ({ type: EXPENSE_CREATE, payload: expense });
export const updateExpense = expense => ({ type: EXPENSE_UPDATE, payload: expense });
export const destroyExpense = expense => ({ type: EXPENSE_DELETE, payload: expense });
