import {ACTION_TYPE} from '../actions/helper/types';

const initialState = {
  shouldShow: false,
};

const activityIndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SHOW_ACTIVITY_INDICATOR:
      return {
        ...state,
        shouldShow: true,
      };
    case ACTION_TYPE.HIDE_ACTIVITY_INDICATOR:
      return {
        shouldShow: false,
      };
    default:
      return state;
  }
};

export default activityIndicatorReducer;
