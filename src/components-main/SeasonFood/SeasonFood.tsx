import React, { SFC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodInputProps } from './SeasonFood.interface';

import {
  ImageGrid
} from '../../components-layout';

export const SeasonFood: SFC<ISeasonFoodInputProps> = ({
  food,
  navigation
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
    <ImageGrid data={ food } />
  </SeasonDetailsContentWrapperConnector>
);
