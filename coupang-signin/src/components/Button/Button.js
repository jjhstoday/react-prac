import React from 'react';
import { signin, signup, divider } from './Button.module.scss';
import Validation from '../Validation/Validation';

console.log(Validation);

export default function Button({ type }) {
  let buttonText = null;
  let className = null;
  let cursorDisabled = null;

  switch (type) {
    case "signin": 
      buttonText = "로그인";
      className = signin;
      cursorDisabled = "not-allowed";
      break;
    case "signup":
      buttonText = "회원가입";
      className = signup;
      break;
    default:
      throw new Error('Unhandled Button type!');
  }

  return (
    <>
     <button type={type} className={className} style={{cursor: cursorDisabled}}>{buttonText}</button>
     {type === "signin" && <div className={divider}></div>}
    </>
  )
}
