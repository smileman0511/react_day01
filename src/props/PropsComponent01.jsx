import React from 'react';

const PropsComponent01 = (props) => {
  console.log("props", props)

  props.printName()
  
  return (
    <div>
      <p style={{color: props.color}}>{props.name}</p>
    </div>
  );
};

export default PropsComponent01;