import { useState } from 'react';

const StaleClosure = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
};

export default StaleClosure;
