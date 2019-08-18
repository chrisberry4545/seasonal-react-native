import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  SET_DIET_TYPE, selectSettingsState, INIT_APP, initSettings, ISettingsState, SET_REGION, DIET_TYPE
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';

import {
  map,
  ignoreElements,
  withLatestFrom,
  tap,
  filter,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { AppSeasonalEpic } from './seasonal-epic.type';
import { setStoredData, getStoredData } from '../../helpers';

const settingsStorageKey = 'seasonalSettings';

export const storeSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_DIET_TYPE, SET_REGION),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsState(state)),
    tap((settingsState) => setStoredData(settingsStorageKey, settingsState)),
    ignoreElements()
  )
);

export const getStoredSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getStoredData<ISettingsState>(settingsStorageKey)),
    map((settings) => initSettings(settings || {
      dietType: DIET_TYPE.ALL,
      selectedCountryId: undefined,
      selectedRegionCode: undefined
    }))
  )
);
