'use strict'

import { combineReducers } from 'redux';
import routes from './routes';
import character from './character';

export default combineReducers({
  routes,
  character
})
