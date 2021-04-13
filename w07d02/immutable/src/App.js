import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';
import {useState} from 'react';

const App = () => {
  const [heading, setHeading] = useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      <Header heading={heading} moreStuff="hello there"/>
      {/* <Header heading="Welcome to our site"/> */}
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
