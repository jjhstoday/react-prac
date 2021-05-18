import React from 'react';
import { Greetings } from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  return <Greetings name='jihye' optional='ohoh~~' onClick={onClick} />;
}

export default App;
