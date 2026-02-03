import React, { use, useEffect, useState } from 'react';

const SideEffectmount = () => {

  console.log("리렌더링")

  const [users, setUsers] = useState([])

  // 참조 불투명 함수(비동기)
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json()
      return users
    }

    getUsers()
      .then(setUsers)
      .catch(console.error)
  }, [])

  return (
    <ul>
      {users.map((user, i) => (<li key={i}>{user.name}</li>))}
    </ul>
  );
};

export default SideEffectmount;