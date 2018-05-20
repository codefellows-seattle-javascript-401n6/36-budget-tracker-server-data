const validator = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');
  console.log('action', action);
  if (isCategory) {
    if (action.type.includes('DESTROY')) return next(action);
    const category = action.payload;
    console.log('category', category);
    const notValid = !category.name || !category.budget;
    if (notValid) {
      throw new Error('VALIDATION ERROR: Category must include name and budget');
    }
    return next(action);
  }
  const isExpense = action.type && action.type.startsWith('EXPENSE');
  if(isExpense) {
    const expense = action.payload;
    console.log('expense', expense);
    const notValid = !expense.name || !expense.price;
    if(notValid) {
      throw new Error('VALIDATION ERROR: Expense must include name and cost');
    }
    return next(action);
  }
};

export default validator;