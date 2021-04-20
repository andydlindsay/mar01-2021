import {useRef, useState} from 'react';

const UseRef = () => {
  const [counter, setCounter] = useState(0);

  const inputRef = useRef();
  const countRef = useRef();
  countRef.current = counter;
  
  const clickHandler = () => {
    inputRef.current.focus();
  };

  const launchAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${countRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>Use Ref</h2>

      <div>
        <input ref={inputRef} />
        <button onClick={clickHandler}>Set Focus</button>
      </div>

      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        <button onClick={launchAlert}>Launch Alert</button>
      </div>
    </div>
  );
};

export default UseRef;
