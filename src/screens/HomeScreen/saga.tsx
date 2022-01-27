import {put, call, takeLatest} from 'redux-saga/effects';
import * as Action from './action_types';
import {GetUserSuccess} from './actions';
import {GET_DUMMY_USERS, GetUserError} from '../../services/api-end-points';
import {request, HTTP_METHODS} from '../../services/services';

export function* GetUserWatcher() {
  yield takeLatest(Action.HomeScreenAction.GET_USERS, getUserRequest);
}

export function* getUserRequest(action: any) {
  try {
    yield put({
      type: Action.HomeScreenAction.GET_USERS_LOADING,
      payload: true,
    });
    const result = yield call(() =>
      request(GET_DUMMY_USERS(), HTTP_METHODS.GET),
    );
    console.log('getUserRequest-->', result);
    if (result?.response?.status == 200) {
      yield put(GetUserSuccess(result?.response?.data || []));
      yield put({
        type: Action.HomeScreenAction.GET_USERS_LOADING,
        payload: false,
      });
    }
  } catch (error: any) {
    const message = error?.data?.message || '';
    yield put(GetUserError(message || ''));
    yield put({
      type: Action.HomeScreenAction.GET_USERS_LOADING,
      payload: false,
    });
  }
}
