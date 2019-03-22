import React, { SFC } from 'react';

import {
  ImageGrid
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesInputProps } from './SeasonRecipes.interface';

export const SeasonRecipes: SFC<ISeasonRecipesInputProps> = ({
  recipes,
  navigation
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
    <ImageGrid data={ recipes } />
  </SeasonDetailsContentWrapperConnector>
);
