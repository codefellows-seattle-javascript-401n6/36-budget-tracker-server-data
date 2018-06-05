const reporter = store => next => action => {
  console.log('REPORTER-ACTION', action, store.getState());
  let result = next(action);
  console.log('REPORTER-RESULT', store.getState());
  return result;
};

export default reporter;