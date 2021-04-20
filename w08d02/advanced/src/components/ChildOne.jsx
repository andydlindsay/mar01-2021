import {useContext} from 'react';
import CounterContext from './CounterContext';

const ChildOne = () => {
  const {setCounter} = useContext(CounterContext);
  // console.log(context);

  return (
    <div>
      <h2>ChildOne</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default ChildOne;
