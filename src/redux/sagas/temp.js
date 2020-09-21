import {takeLatest, put} from 'redux-saga/effects';
import {ACCOUNT} from '../actions/actionTypes';

function* connectFacebook() {
  try {
  } catch (error) {}
}

export default function* accountSaga() {
  yield takeLatest(ACCOUNT.FACEBOOK.REQUEST, connectFacebook);
}
