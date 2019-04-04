import { Action } from 'redux';

export const GO_BACK_FROM_FOOD_DETAILS = 'GO_BACK_FROM_FOOD_DETAILS';
export function goBackFromFoodDetails(): Action {
  return {
    type: GO_BACK_FROM_FOOD_DETAILS
  };
}
