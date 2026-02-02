import React from 'react';

const Food = ({ kor, eng, checked, onChange }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
      />
      <span>{kor}({eng})</span>
    </li>
  );
};

export default Food;