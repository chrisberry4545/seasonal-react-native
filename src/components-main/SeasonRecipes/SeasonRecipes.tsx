import React, { FC } from 'react';

import {
  ImageGrid, TopLoadingSpinner
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';
import { View, ViewStyle } from 'react-native';

const styleDietaryFilterWrapper: ViewStyle = {
  paddingTop: 20
};

export const SeasonRecipes: FC<ISeasonRecipesProps> = ({
  isLoading,
  recipes,
  onRecipeClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    <View style={styleDietaryFilterWrapper}>
      <DietaryFiltersConnector />
    </View>
    {
      !isLoading
        ? <ImageGrid data={ recipes } onClick={ onRecipeClick } />
        : <TopLoadingSpinner />
    }
  </SeasonDetailsContentWrapperConnector>
);
