import React from 'react';
import PropsComponent01 from './PropsComponent01';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';
import PropsComponent04 from './PropsComponent04';

const Container = () => {

  const name = "강대훈"
  const printName = () => {
    console.log(name)
  }

  const fontSize = "30px"
  const age = 26
  const hobby = "코딩"
  const color = "blue"

  return (
    <div>
      {
      /* <PropsComponent01 name={name} printName={printName} />
      <PropsComponent02 color={color} />
      <PropsComponent03 name={name} age={age} hobby={hobby} color={color} fontSize={fontSize}/>
      */}
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식 요소! 눈 안부심</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;