import { IHydratedFood } from '@chrisb-dev/seasonal-shared';
import { Action } from 'redux';

export interface ISetCurrentFoodDetailsDataSuccess extends Action {
  currentFoodDetailsData: IHydratedFood;
}
export const SET_CURRENT_FOOD_DETAILS_DATA_SUCCESS =
  'SET_CURRENT_FOOD_DETAILS_DATA_SUCCESS';
export function setCurrentFoodDetailsDataSuccess(
  currentFoodData: IHydratedFood
): ISetCurrentFoodDetailsDataSuccess {
  return {
    currentFoodDetailsData: currentFoodData,
    type: SET_CURRENT_FOOD_DETAILS_DATA_SUCCESS
  };
}
