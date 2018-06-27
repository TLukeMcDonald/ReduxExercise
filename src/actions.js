import C from './constants';
import fetch from 'isomorphic-fetch';

export const addDay = (resort, date, powder = false, backcountry = false) => ({
  type: C.ADD_DAY,
  payload: {
    resort, date, powder, backcountry,
  },
});

export const removeDay = date => ({
  type: C.REMOVE_DAY,
  payload: date,
});

export const setGoal = goal => ({
  type: C.SET_GOAL,
  payload: goal,
});

export const addError = message => ({
  type: C.ADD_ERROR,
  payload: message,
});

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index,
});

export const changeSuggestions = suggestions => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: suggestions,
});

export const clearSuggestions = () => ({
  type: C.CLEAR_SUGGESTIONS,
  // payload: [],
});


// thunks are functions from middleware that return another function
export const randomGoals = () => (dispatch, getState) => {
  if (!getState().resortNames.fetching) {
    dispatch({
      type: C.FETCH_RESORT_NAMES,
    });

    setTimeout(() => {
      dispatch({
        type: C.CANCEL_FETCHING,
      });
    }, 1500);
  }
};

// thunk for resort suggestor
export const suggestResortNames = value => dispatch => {
  dispatch({
    type: C.FETCH_RESORT_NAMES,
  });

  fetch('http://localhost:3333/resorts/' + value)
    .then(response => response.json())
    .then(suggestions => {
      dispatch({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions,
      })
    })
    // if there is an error dispatch the error message and cancel fetching
    .catch(error => {
      dispatch(
        addError(error.message)
        )
      dispatch({
        type: C.CANCEL_FETCHING,
      })
    })

};

