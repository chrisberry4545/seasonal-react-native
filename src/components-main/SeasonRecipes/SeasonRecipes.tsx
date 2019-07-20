import React, { FC } from 'react';

import {
  ImageGrid
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';
import { LoadingSpinner } from '../../components-elements';
import { ViewStyle } from 'react-native';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

const styleSeasonRecipesLoadingSpinner: ViewStyle = {
  flex: 1
};

export const SeasonRecipes: FC<ISeasonRecipesProps> = ({
  isLoading,
  recipes,
  onRecipeClick
}) => (
  !isLoading
  ? <SeasonDetailsContentWrapperConnector>
      <DietaryFiltersConnector />
      <ImageGrid data={ recipes } onClick={ onRecipeClick } />
    </SeasonDetailsContentWrapperConnector>
  : <LoadingSpinner style={styleSeasonRecipesLoadingSpinner} />
);
