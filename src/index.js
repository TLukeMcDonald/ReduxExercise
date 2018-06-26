import { createStore } from 'redux';
import C from './constants';
import appReducer from './store/reducers';
import storeFactory from './store';

// Ch03-03
// const store = createStore(appReducer, initialState);

// const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};


// // to-do remove for production. This is only for debugging.
// window.store = store;

// // add callback handlers that ar invoked every time an action is dispatched
// store.subscribe(() => console.log(store.getState()));

// store.subscribe(() => {
//   const state = JSON.stringify(store.getState());
//   localStorage['redux-store'] = state;
// });

// ch 03-04
// const store = createStore(appReducer);

// // every susbscribe automatically has an unsubscribe created.
// const unsubscribeGoalLogger = store.subscribe(() => console.log(`    Goal: ${store.getState().goal}`));

// // logs a random goal ever 250 miliseconds
// setInterval(() => {
//   store.dispatch({
//     type: C.SET_GOAL,
//     payload: Math.floor(Math.random() * 100),
//   });
// }, 250);

// // after 3 seconds unsubscribes the goal logging
// setTimeout(() => {
//   unsubscribeGoalLogger();
// }, 3000);

// ch 03-05
const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-10-28',
    powder: true,
    backcountry: true,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Squaw Valley',
    date: '2016-3-28',
    powder: true,
    backcountry: false,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'The Canyons',
    date: '2016-1-2',
    powder: false,
    backcountry: true,
  },
});
