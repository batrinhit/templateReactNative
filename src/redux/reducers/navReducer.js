import {RootNavigator} from '../../navigations/AppNavigation';

export default (state, action) => {
  const {type} = action;
  let newState;
  switch (type) {
    default:
      newState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
