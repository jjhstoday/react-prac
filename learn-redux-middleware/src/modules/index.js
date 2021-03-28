import { combineReducers } from 'redux';
import Counter, { counterSaga } from './Counter';
import posts, { postsSaga } from './posts';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ Counter, posts });
export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;
