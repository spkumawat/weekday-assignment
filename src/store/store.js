// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer

const store = createStore(rootReducer); // You can optionally pass initial state or middleware here

export default store;
