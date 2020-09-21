import {
  LOADING_VIEW,
  POPUP_ERROR,
  POPUP_SUCCESS,
  NAVIGATION_APP,
} from './actionTypes';

export const showLoading = () => ({
  type: LOADING_VIEW.SHOW,
});

export const hideLoading = () => ({
  type: LOADING_VIEW.HIDE,
});

export const showPopupError = (title, content) => ({
  type: POPUP_ERROR.SHOW,
  title,
  content,
});

export const hidePopupError = () => ({
  type: POPUP_ERROR.HIDE,
});

export const showPopupSuccess = (title, content) => ({
  type: POPUP_SUCCESS.SHOW,
  title,
  content,
});

export const hidePopupSuccess = () => ({
  type: POPUP_SUCCESS.HIDE,
});

export const NavigationRouter = (nameScreen, dataParams) => ({
  type: NAVIGATION_APP.NAVIGATE,
  nameScreen,
  dataParams,
});

export const NavigationBack = () => ({
  type: NAVIGATION_APP.BACK,
});

export const NavigationReset = (nameScreen) => ({
  type: NAVIGATION_APP.RESET,
  nameScreen,
});

export const NavigationReplace = (nameScreen, dataParams) => ({
  type: NAVIGATION_APP.REPLACE,
  nameScreen,
  dataParams,
});

export const TextHeaderScreen = (nameScreen) => ({
  type: NAVIGATION_APP.ROUTE_NAME_SCREEN,
  nameScreen,
});
