const logger = store => next => action => {
  console.log(action);
  let result = next(action);
  console.log(store.getState());
  return result;
};

export default logger;