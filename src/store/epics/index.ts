import { combineEpics } from 'redux-observable';

import {
  getCurrentSeasonDataEpic$
} from './current-season-data.epics';

import { initAppEpic$ } from './init.epics';

export const rootEpic = combineEpics(
  initAppEpic$,
  getCurrentSeasonDataEpic$
);
