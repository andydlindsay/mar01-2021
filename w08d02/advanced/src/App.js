import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Styled from './components/Styled';

const App = () => {
  return (
    <div className="App">
      <h2>Advanced React</h2>

      {/* <Router>
        <Navbar />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/">
            <Home message="hello there" />
          </Route>
        </Switch>

      </Router> */}
      <Styled />
    </div>
  );
};

export default App;
