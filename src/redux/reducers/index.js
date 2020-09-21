import {combineReducers} from 'redux';
import nav from './navReducer';
import another from './another';

const rootReducer = combineReducers({
  nav,
  another,
});

export default rootReducer;
