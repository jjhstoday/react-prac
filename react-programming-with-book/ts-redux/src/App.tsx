import React from 'react';
import { Provider } from 'react-redux';
import { store } from './common/store';
import Person from './person/component/Person';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Person birthday='1993-07-13' />
      </div>
    </Provider>
  );
}

export default App;
