import {Link, Switch, Route} from 'react-router-dom';
import Author from './Author';

const Authors = () => {
  const id = 4;

  return (
    <div>
      <h2>Authors</h2>
      <p>Browse all of our authors!</p>

      <Link to="/authors/1">Author 1</Link>
      <Link to="/authors/2">Author 2</Link>
      <Link to="/authors/3">Author 3</Link>
      <Link to={`/authors/${id}`}>Author {id}</Link>


      <Switch>
        <Route path="/authors/:whateverWeWant" component={Author} />
        <Route path="/authors">
          <h2>Please make a selection from the list above</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Authors;
