import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  SET_DIET_TYPE, selectSettingsState, INIT_APP, initSettings, ISettingsState
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
    ofType(SET_DIET_TYPE),
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
    filter(Boolean),
    map((settings) => initSettings(settings as ISettingsState))
  )
);
