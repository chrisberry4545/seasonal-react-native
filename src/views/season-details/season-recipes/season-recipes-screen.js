import React from 'react';

import {
  SeasonRecipesView
} from './season-recipes-view';

import {
  SeasonDetailsContentWrapper
} from './../season-details-content-wrapper';

const SeasonRecipesScreen = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonRecipesView />
  </SeasonDetailsContentWrapper>
);

export {
  SeasonRecipesScreen
};
