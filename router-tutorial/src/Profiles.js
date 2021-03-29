import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

export default function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to='/profiles/jihye'
            activeStyle={{ background: 'black', color: 'white' }}
          >
            jihye
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profiles/homer'
            activeStyle={{ background: 'black', color: 'white' }}
          >
            homer
          </NavLink>
        </li>
      </ul>

      <Route
        path='/profiles'
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path='/profiles/:username' component={Profile} />
    </div>
  );
}
