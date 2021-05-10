const myLogger = store => next => action => {
  console.log(action);
  const result = next(action);
  console.log('\t', store.getState());
  console.log('result', result);
  return result;
};

export default myLogger;
