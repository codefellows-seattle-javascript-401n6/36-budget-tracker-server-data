



const validate = store => next => action => {
  console.log('in validate', action)
  if(action.type === "CATEGORY_CREATE"){
    if(action.data.name === "" || action.data.budget === ""){
      throw new Error('validation error: create must include name and budget')
    } 
    return next(action);
  }
  if(action.type === "EXPENSE_CREATE"){
    if(action.data.name === "" || action.data.expense === ""){
      throw new Error('validation error: create must include name and budget')
    } 
    return next(action);
  }
  return next(action);
}

export default validate;