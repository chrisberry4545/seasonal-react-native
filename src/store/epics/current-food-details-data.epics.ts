import { ofType, ActionsObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '../../services';

import {
  setCurrentFoodDetailsDataSuccess,
  FOOD_ITEM_CLICKED,
  IFoodItemClicked
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';

export const getCurrentFoodDetailsDataEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    switchMap((action) => (
      getFoodDetailsData((action as IFoodItemClicked).foodItemId)
    )),
    map((currentFoodData) => setCurrentFoodDetailsDataSuccess(currentFoodData))
  )
);
