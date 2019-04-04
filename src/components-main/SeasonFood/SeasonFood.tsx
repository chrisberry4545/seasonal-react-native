import React, { SFC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';

import {
  ImageGrid
} from '../../components-layout';
import { NavigationScreenProp } from 'react-navigation';

const navigateToFoodPage = (
  navigation?: NavigationScreenProp<{}>
) => {
  if (navigation) {
    navigation.navigate({
      routeName: 'foodDetails'
    });
  }
};

export const SeasonFood: SFC<ISeasonFoodProps> = ({
  food,
  navigation,
  onFoodClick
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
    <ImageGrid data={ food } onClick={
      (foodItemId) => {
        onFoodClick(foodItemId);
        navigateToFoodPage(navigation);
      }
    } />
  </SeasonDetailsContentWrapperConnector>
);
