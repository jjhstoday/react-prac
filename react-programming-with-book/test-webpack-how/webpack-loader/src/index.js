import React from 'react';
import ReactDOM from 'react-dom';
import Style from './App.css';

export default function App() {
  console.log({ Style });
  return (
    <div className='container'>
      <h3 className='title'>webpack example</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
