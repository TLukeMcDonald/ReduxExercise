import C from './constants';
import expect from 'expect';
import { fetching, allSkiDays } from './store/reducers';


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

  console.log(`

    Test for Fetch Resort Names
    Test A: FETCH_RESORT_NAMES Passed!!!

    `);
}
