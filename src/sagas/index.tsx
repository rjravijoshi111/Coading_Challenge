import {all} from 'redux-saga/effects';
import {GetUserWatcher} from '../screens/HomeScreen/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    GetUserWatcher()
  ]);
}
