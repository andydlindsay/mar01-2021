import {useContext} from 'react';
import CounterContext from './CounterContext';

const ChildTwo = () => {
  const {counter} = useContext(CounterContext);

  return (
    <div>
      <h2>ChildTwo</h2>
      <h2>Current count: {counter}</h2>
    </div>
  );
};

export default ChildTwo;
