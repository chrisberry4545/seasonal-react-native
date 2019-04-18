import React, { FC } from 'react';

import {
  ImageGrid
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';

export const SeasonRecipes: FC<ISeasonRecipesProps> = ({
  recipes,
  onRecipeClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    <ImageGrid data={ recipes } onClick={ onRecipeClick } />
  </SeasonDetailsContentWrapperConnector>
);
