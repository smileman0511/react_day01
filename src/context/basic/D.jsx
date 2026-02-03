import React, { useContext } from 'react';
import CharContext from './CharContext';

const D = () => {

  const {color, fontSize, setFontSize} = useContext(CharContext)

  return (
    <div>
      <p style={{color, fontSize}}>리액트 My Context!😎</p>
      <button onClick={() => setFontSize("100px")}>글자 100px 크기 변경!</button>
    </div>
  );
};

export default D;