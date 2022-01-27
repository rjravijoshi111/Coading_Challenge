import {HomeScreenAction} from './action_types';

export const GetUserData = () => ({
  type: HomeScreenAction.GET_USERS,
});

export const GetUserSuccess = (payload: any) => ({
  type: HomeScreenAction.GET_USERS_SUCCESS,
  payload,
});

export const GetUserError = (payload: any) => ({
  type: HomeScreenAction.GET_USERS_ERROR,
  payload,
});
