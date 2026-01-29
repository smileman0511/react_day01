import React, { useState } from 'react';

const Name = () => {
  //리렌더링이 되려면 상태를 바꿔야 한다.

  // 사용자가 입력한 이름을 화면에 실시간으로 출력
  const[name, setName] = useState()
  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={handleNameChange} />
    </div>
  );
};

export default Name;
