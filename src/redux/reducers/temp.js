import {ACCOUNT_FACEBOOK} from '../actions/account';

const initialState = {
  listAccount: [],
};

export default function (state = initialState, action) {
  const {type, response} = action;
  switch (type) {
    case ACCOUNT_FACEBOOK.SUSSCESS: {
      return {
        ...state,
        listAccount: [...state.listAccount, response],
      };
    }
    default:
      return state;
  }
}
