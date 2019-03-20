import React, { SFC } from 'react';

import {
  SeasonRecipesView
} from './SeasonRecipesView';

import {
  SeasonDetailsContentWrapper
} from '../../components-layout';
import { NavigationScreenProp } from 'react-navigation';

export const SeasonRecipesPage: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonRecipesView />
  </SeasonDetailsContentWrapper>
);
