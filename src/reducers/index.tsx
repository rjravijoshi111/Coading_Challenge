import { combineReducers } from "redux";
import DebitCardReducer from '../screens/DebitCardScreen/reducer';
import HomeScreenReducer from '../screens/HomeScreen/reducer';

const appReducer = combineReducers({
  DebitCardReducer: DebitCardReducer,
  HomeScreenReducer: HomeScreenReducer,
});

export default appReducer;
