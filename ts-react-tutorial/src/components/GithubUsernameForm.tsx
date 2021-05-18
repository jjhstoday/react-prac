import React, { useState, ChangeEvent, FormEvent } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

export default function GithubUsernameForm({
  onSubmitUsername
}: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className='GithubUsernameForm'>
      <input
        type='text'
        value={input}
        placeholder='Github 계정명을 입력하세요.'
        onChange={onChange}
      />
      <button type='submit'>조회</button>
    </form>
  );
}
