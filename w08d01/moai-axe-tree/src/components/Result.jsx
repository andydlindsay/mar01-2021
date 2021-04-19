import React from 'react';
import axios from 'axios';
import { genFeedbackMessage } from '../helpers/helpers';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);
  const message = genFeedbackMessage(props.status);

  const fetchHighScores = () => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores')
      .then(data => setHighScores(data.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{message}</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(highScore => <li key={highScore.id}>{highScore.name}: {highScore.points}</li>) }
    </footer>
  );
}

export default Result;
