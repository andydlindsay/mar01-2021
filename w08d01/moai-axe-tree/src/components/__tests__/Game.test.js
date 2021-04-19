import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('change the cheating state when the robot head icon is clicked', () => {
    // render our component
    const { container, getByTestId } = render(<Game />);

    // global import
    // getByTestId(container, 'robot-head');

    // render import
    // find the robot head icon in the DOM
    const robotHead = getByTestId('robot-head');

    // click on it
    fireEvent.click(robotHead);
    
    // check if the robot head has a class of cheating
    expect(robotHead).toHaveClass('cheating');
    
    // click on it again
    fireEvent.click(robotHead);
    
    // check if the robot head does not have the class of cheating
    expect(robotHead).not.toHaveClass('cheating');
  });

});
