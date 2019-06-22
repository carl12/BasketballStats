import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function rootReducer(state = null, action) {
  if (!state) {
    return {
      currStat: null,
      teams: [],
      maxTotal: null,
    };
  }
  const newState = {};
  newState.currStat = state.currStat;
  newState.teams = state.teams.slice();
  newState.maxTotal = state.maxTotal;
  switch (action.type) {
    case 'ADD_TEAM_DATA':
      return newState;
    case 'REMOVE_TEAM':
      return newState;
    case 'CHANGE_TEAM':
      return newState;
    case 'CHANGE_STAT':
      return newState;
    default:
      return newState;
  }
}

const store = createStore(rootReducer, null, applyMiddleware(thunk));
