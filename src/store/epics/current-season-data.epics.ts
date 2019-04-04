import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  SET_CURRENT_SEASON_DATA_START,
  setCurrentSeasonDataSuccess,
  INIT_APP,
  FOOD_DETAILS_SELECT_SEASON,
  setCurrentSeasonDataStart
} from '../actions';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectCurrentSeasonIndex } from '../selectors';

export const getCurrentSeasonDataStartEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_APP,
      FOOD_DETAILS_SELECT_SEASON
    ),
    mapTo(setCurrentSeasonDataStart())
  )
);

export const getCurrentSeasonDataEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_DATA_START),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentSeasonIndex(state)),
    switchMap((seasonIndex) => getSeasonDataBySeasonIndex(seasonIndex)),
    map((foodData) => setCurrentSeasonDataSuccess(foodData))
  )
);
