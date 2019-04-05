import React, { SFC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';

import {
  ImageGrid
} from '../../components-layout';

export const SeasonFood: SFC<ISeasonFoodProps> = ({
  food,
  onFoodClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    <ImageGrid data={ food } onClick={onFoodClick} />
  </SeasonDetailsContentWrapperConnector>
);
