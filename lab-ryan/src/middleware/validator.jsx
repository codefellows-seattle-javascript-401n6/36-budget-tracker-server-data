// Possible items to add:
// Prevent an item from being added if it's over budget.
// Prevent a budget from being created with zero or less dollars.
// Prevent a budget or item from being created without a name.


//from lab 33 demo code
const validator = store => next => action => {

    return next(action);
}


  export default validator;