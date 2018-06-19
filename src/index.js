import C from './constants';
import expect from 'expect';
import { suggestions, fetching, allSkiDays } from './store/reducers';


/*  Test for Remove Day */
{
  const state = [
    {
      resort: 'Kirkwood',
      date: '2017-11-15',
      powder: true,
      backcountry: false,
    },
    {
      resort: 'Boreal',
      date: '2017-11-16',
      powder: false,
      backcountry: false,
    },
  ];

  const action = {
    type: C.REMOVE_DAY,
    payload: '2017-11-15',
  };

  const nextState = allSkiDays(state, action);

  console.log(`

    Test for Remove Day
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
    `);
}


/*  Test for Fetch Resort Names */{
  const action = {
    type: C.FETCH_RESORT_NAMES,
  };

  const state = false;
  const expectedState = true;

  const actualState = fetching(state, action);

  expect(actualState).toEqual(expectedState);

  console.log(`    Test for FETCH_RESORT_NAMES Passed!!!`);
}


/* Test for Cancel Fetch  */
{
  const action = {
    type: C.CANCEL_FETCHING,
  };

  const state = true;
  const expectedState = false;

  const actualState = fetching(state, action);

  expect(actualState).toEqual(expectedState);

  console.log(`    Test for CANCEL_FETCHING Passed!!!
        initial state: ${JSON.stringify(state)}
        new state: ${JSON.stringify(expectedState)}`);
}

/* Test for Clear Suggestions  */
{
  const action = {
    type: C.CLEAR_SUGGESTIONS,
  };

  const state = ['Heavenly Ski Resort', 'Heavens Sonohara'];

  const expectedState = [];

  const actualState = suggestions(state, action);

  expect(actualState).toEqual(expectedState);

  console.log(`    Test for CLEAR_SUGGESTIONS Passed!!!
      initial state: ${JSON.stringify(state)}
      new state: ${JSON.stringify(expectedState)}`);
}

/* Test for Change Suggestions */
{
  const action = {
    type: C.CHANGE_SUGGESTIONS,
    payload: ['Heavenly Ski Resort', 'Heavens Sonohara'],
  };

  const state = {
    fetching: true,
    suggestions: [],
  };

  const expectedState = {
    fetching: false,
    suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara'],
  };

  const actualState = {
    fetching: fetching(state.fetching, action),
    suggestions: suggestions(state.suggestions, action),
  };

  expect(actualState.fetching).toEqual(expectedState.fetching);
  expect(actualState.suggestions).toEqual(expectedState.suggestions);

  console.log(`    Test for CHANGE_SUGGESTIONS Passed!!!
      initial state: ${JSON.stringify(state)}
      new state: ${JSON.stringify(expectedState)}`);
}

