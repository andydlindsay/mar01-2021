import { announceResult, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {

  test('can choose a random item', () => {
    // chooseRobotItem(playerSelection, cheatingBoolean);
    const playerSelection = 'Moai';
    const cheating = false;

    const actual = chooseRobotItem(playerSelection, cheating);

    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBeTruthy();
    expect(options).toContain(actual);
  });

  test('can choose the winning item if cheating is "true"', () => {
    let playerSelection = 'Moai';
    const cheating = true;

    let actual = chooseRobotItem(playerSelection, cheating);
    expect(actual).toBe('Tree');

    playerSelection = 'Tree';
    actual = chooseRobotItem(playerSelection, cheating);
    expect(actual).toBe('Axe');
    
    playerSelection = 'Axe';
    actual = chooseRobotItem(playerSelection, cheating);
    expect(actual).toBe('Moai');
  });

});