import expect from 'expect';
import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';
import { goal, skiDay, errors, allSkiDays, fetching, suggestions } from './store/reducers';

let state = initialState;

console.log(`
  Initial state
  =============
  goal: ${state.goal};
  resorts: ${JSON.stringify(state.allSkiDays)};
  fetching: ${state.resortNames.fetching};
  suggestions: ${state.resortNames.suggestions};

  `);

state = appReducer(state, {
  type: C.SET_GOAL,
  payload: 2,
});

state = appReducer(state, {
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-10-28',
    powder: false,
    backcountry: true,
  },
});

state = appReducer(state, {
  type: C.CHANGE_SUGGESTIONS,
  payload: ['Mt Tallac', 'Mt Hood', 'Mt Shasta'],
});

console.log(`
  Next state
  =============
  goal: ${state.goal};
  resorts: ${JSON.stringify(state.allSkiDays)};
  fetching: ${state.resortNames.fetching};
  suggestions: ${state.resortNames.suggestions};


    Tests
  =============
  `);

/*  Test for Goal  */
{
  const state = 10;
  const expectedState = 15;
  const action = {
    type: C.SET_GOAL,
    payload: 15,
  };
  const nextState = goal(state, action);

  expect(nextState).toEqual(expectedState);

  console.log(`    Test for Goal Passed!!!
      initial state: ${state}
      action: ${JSON.stringify(action)}
      new state: ${nextState}`);
}

/*  Test for Ski Day  */
{
  const state = null;
  const expectedState = {
    resort: 'Heavenly',
    date: '2016-12-16',
    powder: true,
    backcountry: false,
  };

  const action = {
    type: C.ADD_DAY,
    payload: {
      resort: 'Heavenly',
      date: '2016-12-16',
      powder: true,
      backcountry: false,
    },
  };

  const nextState = skiDay(state, action);

  expect(nextState).toEqual(expectedState);

  console.log(`    Test for Ski Day Passed!!!
      initial state: ${state}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}`);
}


/*  Test for Adding Errors  */
{
  const state = [
    'user not authorized',
    'server feed not found',
  ];
  const expectedState = [
    'user not authorized',
    'server feed not found',
    'cannot connect to server',
  ];
  const action = {
    type: C.ADD_ERROR,
    payload: 'cannot connect to server',
  };

  const nextState = errors(state, action);

  expect(nextState).toEqual(expectedState);

  console.log(`    Test for Adding Errors Passed!!!
      initial state: ${state}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}`);
}


/*  Test for Removing Errors  */
{
  const state = [
    'user not authorized',
    'server feed not found',
  ];
  const expectedState = [
    'server feed not found',
  ];
  const action = {
    type: C.CLEAR_ERROR,
    payload: 0,
  };

  const nextState = errors(state, action);

  expect(nextState).toEqual(expectedState);

  console.log(`    Test for Removing Errors Passed!!!
      initial state: ${state}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}`);
}


/*  Test for Adding a Day  */
{
  const state = [
    {
      resort: 'Kirkwood',
      date: '2017-11-15',
      powder: true,
      backcountry: false,
    },
  ];
  const expectedState = [
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
    type: C.ADD_DAY,
    payload: {
      resort: 'Boreal',
      date: '2017-11-16',
      powder: false,
      backcountry: false,
    },
  };

  const nextState = allSkiDays(state, action);

  console.log(`    Test for Add Day Passed!!!
      initial state: ${JSON.stringify(state)}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}`);
}




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

  console.log(`    Test for Remove Day Passed!!!
      initial state: ${JSON.stringify(state)}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}`);
}


/*  Test for Fetch Resort Names */{
  const action = {
    type: C.FETCH_RESORT_NAMES,
  };

  const state = false;
  const expectedState = true;

  const actualState = fetching(state, action);

  expect(actualState).toEqual(expectedState);

  console.log(`    Test for FETCH_RESORT_NAMES Passed!!!
      initial state: ${JSON.stringify(state)}
      new state: ${JSON.stringify(expectedState)}`);
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

