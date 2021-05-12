import './App.css';
import Home from './components/Home';
import About from './components/About';
import Authors from './components/Authors';

const App = () => {
  return (
    <div className="App">
      <h2>React Routing</h2>
      <Home />
      <About />
      <Authors />
    </div>
  );
};

export default App;
