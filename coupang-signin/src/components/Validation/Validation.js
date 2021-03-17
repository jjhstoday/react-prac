import React from 'react';
import { validation, errorVisible } from './Validation.module.scss';
import classNames from 'classnames';

const errorMessage = {
  emptyEmailError: '아이디(이메일)을 입력해주세요.',
  unexpectedEmailError: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
  emptyPwError: '비밀번호를 입력해주세요.',
  unexpectedPwError: '숫자, 영어 조합 6자리 이상 입력해야 합니다.'
};

const errorRegExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const errorRegExpPassword = /^[a-z0-9]{6,50}$/;

export default function Validation({ inputState, inputName }) {
  console.log(inputState);
  console.log(inputName);
  let error = '';
  let type = '';
  let validationClassName = classNames(validation);

  if (inputName === 'email') {
    if (!inputState) {
      console.log('이메일이 비어있음!!');
      type = 'emptyEmail';
    } else if (!inputState.match(errorRegExpEmail)) {
      console.log('잘못된 이메일 형식');
      type = 'unexpectedEmail';
    } else type = '';
  }

  if (inputName === 'password') {
    if (!inputState) {
      console.log('비밀번호가 비어있음!!');
      type = 'emptyPw';
    } else if (!inputState.match(errorRegExpPassword)) {
      console.log('잘못된 비밀번호 형식');
      type = 'unexpectedPw';
    } else type = '';
  }

  if (type) {
    validationClassName = classNames(validation, errorVisible);
  }

  console.log(type);

  switch (type) {
    case '':
      break;
    case 'emptyEmail':
      error = errorMessage.emptyEmailError;
      break;
    case 'unexpectedEmail':
      error = errorMessage.unexpectedEmailError;
      break;
    case 'emptyPw':
      error = errorMessage.emptyPwError;
      break;
    case 'unexpectedPw':
      error = errorMessage.unexpectedPwError;
      break;
    default:
      throw new Error('Unhandled validation type!');
  }
  return <div className={validationClassName}>{error}</div>
}
