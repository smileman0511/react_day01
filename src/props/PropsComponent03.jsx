import React from 'react';

const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  // props는 객체이므로 구조 분해 할당으로 가능

  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기
  const style = {fontSize, color}
  

  return (
    <div>
      <p style={style}>이름: {name}</p>
      <p style={style}>나이: {age}</p>
      <p style={style}>취미: {hobby}</p>
    </div>
  );
};

export default PropsComponent03;