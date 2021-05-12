import './App.css';
import Home from './components/Home';
import About from './components/About';
import Authors from './components/Authors';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>React Routing</h2>

      <Router>
        <Navigation />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/authors" component={Authors} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>      
      </Router>
    </div>
  );
};

export default App;
