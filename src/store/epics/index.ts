import { combineEpics } from 'redux-observable';

import {
  getAllBasicSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$
} from './all-basic-season-data.epics';

import {
  getCurrentFoodDetailsDataEpic$
} from './current-food-details-data.epics';

import {
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$
} from './current-season-data.epics';

import {
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  closeMenu$,
  openMenu$
} from './route.epics';

import { initAppEpic$ } from './init.epics';

export const rootEpic = combineEpics(
  initAppEpic$,
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$,
  getCurrentFoodDetailsDataEpic$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  closeMenu$,
  openMenu$
);
