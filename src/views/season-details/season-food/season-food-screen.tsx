import React, { SFC } from 'react';

import {
  SeasonFoodView
} from './season-food-view';

import {
  SeasonDetailsContentWrapper
} from './../season-details-content-wrapper';
import { NavigationScreenProp } from 'react-navigation';

export const SeasonFoodScreen: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonFoodView />
  </SeasonDetailsContentWrapper>
);
