import { combineReducers } from "redux";
import DebitCardReducer from '../screens/DebitCardScreen/reducer';

const appReducer = combineReducers({
  DebitCardReducer: DebitCardReducer,
});

export default appReducer;
