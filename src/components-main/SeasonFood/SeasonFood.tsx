import React, { FC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';

import {
  ImageGrid
} from '../../components-layout';

export const SeasonFood: FC<ISeasonFoodProps> = ({
  food,
  onFoodClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    <ImageGrid data={ food } onClick={onFoodClick} noResultsMessage='No results found' />
  </SeasonDetailsContentWrapperConnector>
);
