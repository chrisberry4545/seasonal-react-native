import { combineEpics } from 'redux-observable';

import {
  getAllBasicSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$
} from './all-basic-season-data.epics';

import {
  getCurrentFoodDetailsDataEpic$
} from './current-food-details-data.epics';

import {
  getCurrentSeasonDataEpic$
} from './current-season-data.epics';

import { initAppEpic$ } from './init.epics';

export const rootEpic = combineEpics(
  initAppEpic$,
  getCurrentSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$,
  getCurrentFoodDetailsDataEpic$
);
