import { ofType, ActionsObservable } from 'redux-observable';

import {
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  SET_CURRENT_SEASON_DATA_START,
  setCurrentSeasonDataSuccess
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';

export const getCurrentSeasonDataEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_DATA_START),
    switchMap(({ seasonIndex }: any) => (
      getSeasonDataBySeasonIndex(seasonIndex))
    ),
    map((foodData) => setCurrentSeasonDataSuccess(foodData))
  )
);
