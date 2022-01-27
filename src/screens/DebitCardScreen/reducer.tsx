/**
 * Constants
 */
import { DebitCardAction } from "./action_types";

// Initial Statt
const initialState = {
  spedingLimit: undefined,
  isFreezeCard: false
};

const DebitCardReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {

    case DebitCardAction.SET_SPEDING_LIMIT: {
      return {
        ...state,
        spedingLimit: action.payload,
      };
    }
    case DebitCardAction.IS_FREEZE_CARD: {
      return {
        ...state,
        isFreezeCard: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default DebitCardReducer;
