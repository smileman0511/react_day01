import React from 'react';
import ChildComponent from './ChildComponent';
import { FontSizeProvider } from './FontSizeContext';
import ChildInputComponent from './ChildInputComponent';

const ParentContainer = () => {

  
  return (
    <div>
      <FontSizeProvider>
        <ChildInputComponent />
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;