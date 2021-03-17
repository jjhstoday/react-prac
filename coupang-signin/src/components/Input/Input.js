import React, { useState } from 'react'
import classNames from 'classnames'
import { container, email, password, icon, iconEmail, iconPassword, iconPasswordVisible, error } from './Input.module.scss';
import Icon from '../Icon/Icon';
import Validation from '../Validation/Validation';

export default function Input({ type, ...restProps }) {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  let inputClassName = null;
  let iconClassName = null;
  let iconVisibleClassName = null;

  let inputType = null;
  let placeHolder = null;
  let iconType = null;
  let iconVisibleType = null;
  let inputName = null;

  if (type === "password") {
    iconType = 'password';
    inputName = "password";
    iconVisibleType = visible ? "show" : "hide";
    inputType = visible ? "text" : "password";
    placeHolder = "비밀번호";
    inputClassName = password;
    iconClassName = classNames(icon, iconPassword);
    iconVisibleClassName = classNames(icon, iconPasswordVisible)
  } else {
    iconType = 'email';
    inputName = "email";
    inputType = "text";
    placeHolder = "아이디(이메일)";
    inputClassName = classNames(email);
    iconClassName = classNames(icon, iconEmail);
  }

  const onChange = e => {
    setText(e.target.value);
  };

  const onClick = () => {
    setVisible(prevVisible => prevVisible = !prevVisible);
  }

  return (
    <div className={container}>
     {iconType && <Icon type={iconType} className={iconClassName} />}
      <input 
        name={inputName}
        type={inputType}
        placeholder={placeHolder}
        className={inputClassName}
        onChange={onChange}
        value={text}
        {...restProps} 
      />
      
      {iconVisibleType && <Icon 
        type={iconVisibleType} 
        className={iconVisibleClassName} 
        onClick={onClick}
        />}
      <Validation inputState={text} inputName={inputName} />
    </div>
  )
}
