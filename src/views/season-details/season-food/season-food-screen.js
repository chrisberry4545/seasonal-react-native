import React from 'react';

import {
  SeasonFoodView
} from './season-food-view';

import {
  SeasonDetailsContentWrapper
} from './../season-details-content-wrapper';

const SeasonFoodScreen = ({ navigation }) => (
  <SeasonDetailsContentWrapper navigation={ navigation }>
    <SeasonFoodView />
  </SeasonDetailsContentWrapper>
);

export {
  SeasonFoodScreen
};
