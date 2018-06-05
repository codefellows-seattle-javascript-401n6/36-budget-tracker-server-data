const thunk = store => next => action => {
  console.log('THUNK-ACTION: ', action, store.getState());
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState());
  } else {
    return next(action);
  }
  console.log('THUNK-RESULT', store.getState());
};

export default thunk;