import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e.response.status);
      setError(e);
    }
    setLoading(false);
  };

  // 가장 처음 렌더링 될 때만 실행하기 위해 비어있는 배열을 의존성으로 둔다.
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}
