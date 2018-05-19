const logger = store => next => action => {
  console.log('logger', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default logger;