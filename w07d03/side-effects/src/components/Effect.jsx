import {useEffect, useState} from 'react';

const Effect = () => {
  
  useEffect(() => {
    console.log('updating the document title');
    document.title = `the count is ${counter}`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the value in setInterval is ${counter}`);
    }, 3000);

    // adding a mousemove event listener

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(interval);
    };

    return cleanup;
  });
  
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Our Side Effect Component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Effect;
// module.exports.Effect = Effect;