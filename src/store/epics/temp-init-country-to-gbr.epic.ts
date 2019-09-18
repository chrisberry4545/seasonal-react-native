import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
    INIT_SETTINGS, setRegion
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';

import {
  withLatestFrom,
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { AppSeasonalEpic } from './seasonal-epic.type';

export const tempInitCountryToGbr$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_SETTINGS),
    withLatestFrom(state$),
    mapTo(setRegion('gbr'))
  )
);
