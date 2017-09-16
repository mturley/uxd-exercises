import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// main reducers
const reducers = combineReducers({
  routing: routerReducer,
  // your reducer here
});

export default reducers;
