import { createStore } from 'redux';
import C from './constants';
import appReducer from './store/reducers';

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};

const store = createStore(appReducer, initialState);

// to-do remove for production. This is only for debugging.
window.store = store;

// add callback handlers that ar invoked every time an action is dispatched
store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
});
