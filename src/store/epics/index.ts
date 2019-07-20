import { combineEpics } from 'redux-observable';

import {
  rootEpics
} from '@chrisb-dev/seasonal-shared';

import {
  goToAboutUsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  closeMenu$,
  openMenu$,
  goToAllSeasonsView$,
  goBack$
} from './route.epics';
import { trackActionEpic$ } from './tracking.epics';
import { storeSettings$, getStoredSettings$ } from './settings.epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  goToAboutUsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goBack$,
  goToFoodTable$,
  goToAllSeasonsView$,
  closeMenu$,
  openMenu$,
  trackActionEpic$,
  getStoredSettings$,
  storeSettings$
);
