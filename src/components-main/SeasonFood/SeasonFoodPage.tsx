import React, { SFC } from 'react';

import {
  SeasonFoodView
} from './SeasonFoodView';

import {
  SeasonDetailsContentWrapper
} from './../../components-layout';
import { NavigationScreenProp } from 'react-navigation';

export const SeasonFoodPage: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonFoodView />
  </SeasonDetailsContentWrapper>
);
