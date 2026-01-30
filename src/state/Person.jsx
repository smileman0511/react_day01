import React, { useState } from 'react';

const Person = () => {

  // 난수는 임의로 최대 600 사이의 값으로 설정한다. math.random사용
  // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린)

  const [number, setNumber] = useState(0);

  const handleRandomNumber = (e) => {
    const randomNum = Math.floor(Math.random() * 601);
    setNumber(randomNum);
  }

  const isEven = (number % 2 === 0);

  return (
    <div>
      <p style={{color: (isEven ? "pink" : "green")}}>
        {number}
      </p>
      <button onClick={handleRandomNumber}>랜덤 숫자 생성</button>
    </div>
  );
};

export default Person;