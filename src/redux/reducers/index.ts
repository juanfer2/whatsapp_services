import { combineReducers } from '@reduxjs/toolkit';
import healtReducer from './healt-reducer';
import connectionReducer from './connection';
import userReducer from './user';
import qrReducer from './qr';

const rootReducers = combineReducers({
  healt: healtReducer,
  connection: connectionReducer,
  user: userReducer,
  qr: qrReducer
});

export default rootReducers;
