import { createStore, combineReducers } from 'redux';
import timeLineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend
} from './friend/state';

const reducer = combineReducers({
  timeline: timeLineReducer,
  friend: friendReducer
});

const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: '고양이는 정말 귀여워' }));
store.dispatch(addTimeline({ id: 2, desc: '강아지는 정말 귀여워' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '강아지는 정말정말*999 귀여워' }));
store.dispatch(removeTimeline({ id: 1, desc: '고양이는 정말 귀여워' }));

store.dispatch(addFriend({ id: 1, name: '정국' }));
store.dispatch(addFriend({ id: 2, name: '뷔' }));
store.dispatch(editFriend({ id: 2, name: '태형' }));
store.dispatch(removeFriend({ id: 1, name: '정국' }));
