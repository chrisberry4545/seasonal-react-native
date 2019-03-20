import {
  initApp
} from '../actions';

import {
  of,
  Observable
} from 'rxjs';

import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { SeasonalEpic } from './seasonal-epic.type';

export const initAppEpic$: SeasonalEpic = (): Observable<Action> => (
  of(null).pipe(
    mapTo(initApp())
  )
);
