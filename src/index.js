import storeFactory from './store';
import { addDay, removeDay, setGoal } from './actions';

// ch 04-01

const store = storeFactory();
const state = store.getState();


store.dispatch(
  addDay('Heavenly', '2016-12-22'),
);

store.dispatch(
  removeDay('2016-12-22')
  );

store.dispatch(
  setGoal(20)
  );
