import React from 'react';

const Sports = ({name, personnel}) => {
  return (
    <li>
      <p>{name}: {personnel}명</p>
    </li>
  );
};

export default Sports;