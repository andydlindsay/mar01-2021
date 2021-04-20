import {useState} from 'react';
// import ChildOne from './ChildOne';
import InBetween from './InBetween';
import ChildTwo from './ChildTwo';
import CounterContext from './CounterContext';

const Parent = () => {
  const [counter, setCounter] = useState(0);
  // console.log(CounterContext);

  return (
    <div>
      <h2>Parent</h2>

      <CounterContext.Provider value={{counter, setCounter}}>
        {/* <ChildOne /> */}
        <InBetween />
        <ChildTwo />
      </CounterContext.Provider>
    </div>
  );
};

export default Parent;
