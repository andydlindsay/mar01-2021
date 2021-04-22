import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>Class-Based Components</h2>

      <Router>
        <Link to="/lifecycle">Lifecycle</Link><br/>
        <Link to="/classbased">ClassBased</Link>

        <Switch>
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/classbased" component={ClassBased} />
        </Switch>

      </Router>

      {/* <ClassBased message="hello world" num={5}>
        <h3>We are the world</h3>
      </ClassBased> */}
      {/* <Lifecycle /> */}
    </div>
  );
};

export default App;
