import { API_ACTION_TYPE } from './helper/types';
import { actionMappingForApi } from '../utilities/index';
import { generateRoute, requestHeaders } from './helper/routes';
import { convertObjectToLowerCaseKeys } from '../utilities';
import {showActivityIndicator, hideActivityIndicator} from './index'
const TIMEOUT = 15 * 1000;

export const fetchSuccess = (response, actionName) => ({
  type: actionName,
  payload: response,
});

export const fetchFailure = (error, actionName) => ({
  type: actionName,
  payload: error,
});


export const fetchContent = (key) => (dispatch, getState) => {
  if (!key) {
    return null;
  }
  const actionsForRoute = actionMappingForApi(key);
  const {
    inProgressActionName,
    failureActionName,
    successActionName,
  } = actionsForRoute;
  dispatch({ type: inProgressActionName });
  dispatch(showActivityIndicator());

  return dispatch({
    type: API_ACTION_TYPE.API,
    payload: {
      url: generateRoute(key),
      data: null,
      onSuccess: response => {
        dispatch(hideActivityIndicator());
        return fetchSuccess(response, successActionName);
      },
      onFailure: error => {
        dispatch(hideActivityIndicator());
        return fetchFailure(error, failureActionName);
      },
      label: inProgressActionName,
      headers: requestHeaders(),
      method: 'GET',
      timeout: TIMEOUT,
    },
  });
};
