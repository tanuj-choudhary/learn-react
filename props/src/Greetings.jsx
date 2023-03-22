import React from 'react';

const Greetings = ({ name, city }) => {
  return (
    <div>
      Hello {name}, how you are doing at {city}
    </div>
  );
};

export default Greetings;
