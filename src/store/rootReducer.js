// rootReducer.js

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'; // Import your example reducer here

const rootReducer = combineReducers({
  // Add your reducers here
  example: exampleReducer,
});

export default rootReducer;
