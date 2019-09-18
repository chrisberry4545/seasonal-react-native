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
  goBack$,
  goToSettingsPage$
} from './route.epics';
import { trackActionEpic$ } from './tracking.epics';
import { storeSettings$, getStoredSettings$ } from './settings.epics';
import { tempInitCountryToGbr$ } from './temp-init-country-to-gbr.epic';

export const rootEpic = combineEpics(
  ...rootEpics,
  goToAboutUsPage$,
  goToSettingsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goBack$,
  goToFoodTable$,
  goToAllSeasonsView$,
  closeMenu$,
  openMenu$,
  trackActionEpic$,
  getStoredSettings$,
  storeSettings$,
  tempInitCountryToGbr$
);
