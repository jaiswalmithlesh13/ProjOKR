import {ACTION_TYPE} from './helper/types';

export const showActivityIndicator =
  () => (dispatch) => {
    shouldDispatchShowActivityIndicator = true;
    if (shouldDispatchShowActivityIndicator) {
      dispatch({
        type: ACTION_TYPE.SHOW_ACTIVITY_INDICATOR,
      });
    }
  };

export const hideActivityIndicator = () => (dispatch) => {
  setTimeout(() => {
    shouldDispatchShowActivityIndicator = false;
    dispatch({type: ACTION_TYPE.HIDE_ACTIVITY_INDICATOR});
  }, 300);
};
