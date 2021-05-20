import React from 'react';
import ReactDOM from 'react-dom';
import TimelineMain from './timeline/containers/TimelineMain';
import FriendMain from './friend/containers/FriendMain';
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain ageLimit={30} />
      <FriendMain ageLimit={15} />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById('root')
);
