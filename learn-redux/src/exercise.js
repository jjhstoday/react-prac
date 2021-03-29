import { createStore } from 'redux';

const initialState = {
  counter: 0,
  text: '',
  list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
  type: INCREASE
});

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch(increase());
// store.dispatch(decrease());
store.dispatch(changeText('안녕하세용'));
store.dispatch(addToList({ id: 1, text: '오호' }));

console.log(store.getState());