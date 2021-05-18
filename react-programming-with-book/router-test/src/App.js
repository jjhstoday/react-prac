import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Rooms from './Rooms';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px sollid gray' }}>
        <Link to='/'>홈</Link>
        <br />
        <Link to='/photo'>사진</Link>
        <br />
        <Link to='/rooms'>방 소개</Link>
        <br />
        <Route exact path='/' component={Home} />
        <Route exact path='/photo' component={Photo} />
        <Route exact path='/rooms' component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>이곳은 홈페이지입니다.</h2>;
}

function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}