import {useState} from 'react';

const VisitorCounter = () => {
  console.log('rendered!!');
  const [visitors, setVisitors] = useState(0);

  const clickHandler = () => {
    // setVisitors(1 + 1);
    // setVisitors(1 + 1);
    // setVisitors(1 + 1);

    setVisitors((prevVisitors) => {
      return prevVisitors + 1;
    });
    setVisitors((prevVisitors) => {
      return prevVisitors + 1;
    });
    setVisitors((prevVisitors) => {
      return prevVisitors + 1;
    });
    // visitors++;
    // console.log(visitors);
  };

  return (
    <div>
      <h2>Visitors: {visitors}</h2>
      <button onClick={clickHandler}>Increment Visitors</button>
    </div>
  );
};

export default VisitorCounter;
