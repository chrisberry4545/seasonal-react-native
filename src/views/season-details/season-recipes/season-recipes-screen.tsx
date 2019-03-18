import React, { SFC } from 'react';

import {
  SeasonRecipesView
} from './season-recipes-view';

import {
  SeasonDetailsContentWrapper
} from './../season-details-content-wrapper';
import { NavigationScreenProp } from 'react-navigation';

export const SeasonRecipesScreen: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonRecipesView />
  </SeasonDetailsContentWrapper>
);
