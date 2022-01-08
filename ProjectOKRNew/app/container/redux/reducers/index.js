import { combineReducers } from 'redux';

import okrList from './okrList';
import api from './activityIndicatorReducer';
import activityIndicatorReducer from './activityIndicatorReducer';

export default combineReducers({
  okrList,
  api,
  activityIndicatorReducer
});
