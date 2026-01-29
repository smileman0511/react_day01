import React, { useState } from 'react';

const Count = () => {

  // 훅함수 - use...
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
    console.log(number)
  }

  const decrease = () => {
    setNumber(number - 1)
    console.log(number)
  }

  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;