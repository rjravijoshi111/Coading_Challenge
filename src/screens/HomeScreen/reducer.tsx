/**
 * Constants
 */
import {HomeScreenAction} from './action_types';

// Initial Statt
const initialState = {
  userDataLoading: false,
  usersData: [],
  usersDataErrorMessage: '',
};

const HomeScreenReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case HomeScreenAction.GET_USERS_LOADING: {
      return {
        ...state,
        userDataLoading: action.payload,
      };
    }
    case HomeScreenAction.GET_USERS_SUCCESS: {
      return {
        ...state,
        usersData: action.payload,
      };
    }
    case HomeScreenAction.GET_USERS_ERROR: {
      return {
        ...state,
        usersDataErrorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default HomeScreenReducer;
