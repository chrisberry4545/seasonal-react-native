import React, { SFC } from 'react';

import {
  ImageGrid
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';

export const SeasonRecipes: SFC<ISeasonRecipesProps> = ({
  recipes,
  navigation,
  onRecipeClick
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
    <ImageGrid data={ recipes } onClick={ onRecipeClick } />
  </SeasonDetailsContentWrapperConnector>
);
