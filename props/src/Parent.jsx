import React from 'react';
import Greetings from './Greetings';

function Parent() {
  return (
    <div>
      <Greetings name="tanuj" city="indore" />
      <Greetings name="sanidhya" city="ratlam" />
    </div>
  );
}

export default Parent;
