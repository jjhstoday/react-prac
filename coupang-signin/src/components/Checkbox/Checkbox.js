import React, { useState } from 'react';
import { checkbox, label, visible, visibleArrow, container, checkedIcon, uncheckedIcon } from './Checkbox.module.scss';
import { ReactComponent as Arrow } from '../../assets/Checkbox/arrow.svg';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(prevChecked => prevChecked = !prevChecked);
  }

  return (
    <div className={container}>
      <input 
        id="autoLogin" 
        type="checkbox" 
        checked={checked} 
        className={checkbox} 
        onClick={onClick}
      />
      <label htmlFor="autoLogin" className={label} onClick={onClick}>자동 로그인</label>
      <div className={`${checked ? checkedIcon : uncheckedIcon}`}></div>
      {checked && <Arrow className={visibleArrow} />}
      {checked && <div className={visible}>개인 정보 보호를 위해 본인 기기에서만 이용해주세요</div>}
    </div>
  )
}
