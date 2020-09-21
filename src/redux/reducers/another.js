import {
  LOADING_VIEW,
  POPUP_ERROR,
  POPUP_SUCCESS,
  NAVIGATION_APP,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  popupError: {isShow: false, title: undefined, content: undefined},
  popupSuccess: {isShow: false, title: undefined, content: undefined},
};

export default function(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case LOADING_VIEW.SHOW: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOADING_VIEW.HIDE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case POPUP_ERROR.SHOW: {
      return {
        ...state,
        popupError: {
          isShow: true,
          title: action.title,
          content: action.content,
        },
      };
    }
    case POPUP_ERROR.HIDE: {
      return {
        ...state,
        popupError: {
          isShow: false,
          title: undefined,
          content: undefined,
        },
      };
    }

    case POPUP_SUCCESS.SHOW: {
      return {
        ...state,
        popupSuccess: {
          isShow: true,
          title: action.title,
          content: action.content,
        },
      };
    }
    case POPUP_SUCCESS.HIDE: {
      return {
        ...state,
        popupSuccess: {
          isShow: false,
          title: undefined,
          content: undefined,
        },
      };
    }
    case NAVIGATION_APP.ROUTE_NAME_SCREEN: {
      return {
        ...state,
        routeName: action.nameScreen,
      };
    }
    default:
      return state;
  }
}
