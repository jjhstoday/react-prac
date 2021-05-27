import { createStore, combineReducers } from 'redux';
import person, { StatePerson } from '../person/state/reducer';

export interface ReduxState {
  person: StatePerson;
}

const reducer = combineReducers<ReduxState>({
  person
});

export const store = createStore(reducer);
