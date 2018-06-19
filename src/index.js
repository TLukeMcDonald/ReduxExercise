// import expect from 'expect';
import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';


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
    'resort': 'Mt Shasta',
    'date': '2016-10-28',
    'powder': false,
    'backcountry': true,
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

  `);


// /*  Test for Remove Day */
// {
//   const state = [
//     {
//       resort: 'Kirkwood',
//       date: '2017-11-15',
//       powder: true,
//       backcountry: false,
//     },
//     {
//       resort: 'Boreal',
//       date: '2017-11-16',
//       powder: false,
//       backcountry: false,
//     },
//   ];

//   const action = {
//     type: C.REMOVE_DAY,
//     payload: '2017-11-15',
//   };

//   const nextState = allSkiDays(state, action);

//   console.log(`

//     Test for Remove Day
//     initial state: ${JSON.stringify(state)}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState)}
//     `);
// }


// /*  Test for Fetch Resort Names */{
//   const action = {
//     type: C.FETCH_RESORT_NAMES,
//   };

//   const state = false;
//   const expectedState = true;

//   const actualState = fetching(state, action);

//   expect(actualState).toEqual(expectedState);

//   console.log(`    Test for FETCH_RESORT_NAMES Passed!!!
//       initial state: ${JSON.stringify(state)}
//       new state: ${JSON.stringify(expectedState)}`);
// }


// /* Test for Cancel Fetch  */
// {
//   const action = {
//     type: C.CANCEL_FETCHING,
//   };

//   const state = true;
//   const expectedState = false;

//   const actualState = fetching(state, action);

//   expect(actualState).toEqual(expectedState);

//   console.log(`    Test for CANCEL_FETCHING Passed!!!
//       initial state: ${JSON.stringify(state)}
//       new state: ${JSON.stringify(expectedState)}`);
// }

// /* Test for Clear Suggestions  */
// {
//   const action = {
//     type: C.CLEAR_SUGGESTIONS,
//   };

//   const state = ['Heavenly Ski Resort', 'Heavens Sonohara'];

//   const expectedState = [];

//   const actualState = suggestions(state, action);

//   expect(actualState).toEqual(expectedState);

//   console.log(`    Test for CLEAR_SUGGESTIONS Passed!!!
//       initial state: ${JSON.stringify(state)}
//       new state: ${JSON.stringify(expectedState)}`);
// }

// /* Test for Change Suggestions */
// {
//   const action = {
//     type: C.CHANGE_SUGGESTIONS,
//     payload: ['Heavenly Ski Resort', 'Heavens Sonohara'],
//   };

//   const state = {
//     fetching: true,
//     suggestions: [],
//   };

//   const expectedState = {
//     fetching: false,
//     suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara'],
//   };

//   const actualState = {
//     fetching: fetching(state.fetching, action),
//     suggestions: suggestions(state.suggestions, action),
//   };

//   expect(actualState.fetching).toEqual(expectedState.fetching);
//   expect(actualState.suggestions).toEqual(expectedState.suggestions);

//   console.log(`    Test for CHANGE_SUGGESTIONS Passed!!!
//       initial state: ${JSON.stringify(state)}
//       new state: ${JSON.stringify(expectedState)}`);
// }

