import React, { useState } from 'react';

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

const Sound = () => {
  
  // const dogSound = "멍멍"
  // const catSound = "야옹"
  const [sound, setSound] = useState("")

  const dog = () => {
    setSound("멍멍")
  }

  const cat = () => {
    setSound("야옹")
  }


  return (
    <div>
      <button onClick={dog}>강아지</button>
      <button onClick={cat}>고양이</button>
      <h1>{sound}</h1>
    </div>
  );
};

export default Sound;