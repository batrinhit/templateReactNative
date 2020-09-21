import {fork, all} from 'redux-saga/effects';
import another from './another';

export default function* rootSaga() {
  yield all([fork(another)]);
}
