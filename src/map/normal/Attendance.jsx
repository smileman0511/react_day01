import React, { useState } from 'react';

const Attendance = ({name, isPresent}) => {
  const [colorBlue, setcolorBlue] = useState(true);

  const handleClick = () => {
    setcolorBlue(!colorBlue);
  };

  return (
    <li
      onClick={handleClick} 
      style={{ color: colorBlue ? "black" : "blue"}}
    >
      이름: {name} ({isPresent ? "출석" : "결석"})
    </li>
  );
};

export default Attendance;