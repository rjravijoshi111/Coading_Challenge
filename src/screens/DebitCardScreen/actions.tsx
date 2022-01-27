/**
 * Alshaya Framework
 * Version 0.1
 * Filename: Login actions.js
 * created on 29 Jan 2020
 */

import {DebitCardAction} from './action_types';

export const SetSpedingLimit = (spedingLimit: any) => ({
  type: DebitCardAction.SET_SPEDING_LIMIT,
  payload: spedingLimit,
});

export const SetIsFreezeCard = (isFreezeCard: Boolean) => ({
  type: DebitCardAction.IS_FREEZE_CARD,
  payload: isFreezeCard,
});
