import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// bring in the library to be mocked mercilessly
import axios from 'axios';

// tell jest to mock library
jest.mock('axios');

// create fake data
const data = [
  {
    id: 1,
    name: "Alice",
    points: 15
  },
  {
    id: 2,
    name: "Bob",
    points: 10
  },
  {
    id: 3,
    name: "Carol",
    points: 5
  }
];

test('can fetch high scores and show them to the user', () => {
  // any calls to axios.get are mocked
  axios.get.mockResolvedValue({ data });

  // render the Result component
  const { container, getByTestId, findByText, debug } = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));

  debug();

  // find the high scores button and click on it
  const highScoresButton = getByTestId('high-scores');
  fireEvent.click(highScoresButton);

  // asynchronously check if 'Bob' is in the DOM
  return findByText('Bob', { exact: false });

});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});


test('can fake functions', () => {
  const fakeFn = jest.fn();
  // action('save');

  const result = fakeFn('hello');

  expect(fakeFn).toHaveBeenCalled();
  expect(fakeFn).toHaveBeenCalledTimes(1);
  expect(fakeFn).toHaveBeenCalledWith('hello');

  const moreAdvancedFn = jest.fn(() => { return 'jello' });

  const answer = moreAdvancedFn('whatever');
  expect(answer).toBe('jello');
});
