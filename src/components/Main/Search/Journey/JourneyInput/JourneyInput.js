import React from 'react';
import './JourneyInput.css';
import Input1 from './Input1';
import Input2 from './Input2';

function JourneyInput() {
  return (
    <div className="row my-3">
      <Input1 />
      <Input2 />
    </div>
  );
}

export default JourneyInput;
