// App.tsx
// import React from 'react';
// import MyForm from './MyForm';

// function App() {
//   const onSubmit = (form: { name: string; description: string }) => {
//     console.log(form);
//   };

//   return <MyForm onSubmit={onSubmit} />;
// }

// export default App;

import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={onChange} />
      <input
        type='text'
        name='description'
        value={description}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
}
