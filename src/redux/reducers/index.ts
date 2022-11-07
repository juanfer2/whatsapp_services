import { combineReducers } from '@reduxjs/toolkit';
import healtReducer from './healt-reducer';
import connectionReducer from './connection';
import userReducer from './user';

const rootReducers = combineReducers({
  healt: healtReducer,
  connection: connectionReducer,
  user: userReducer
});

export default rootReducers;
