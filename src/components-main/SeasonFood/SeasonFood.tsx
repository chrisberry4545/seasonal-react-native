import React, { FC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';

import {
  ImageGrid
} from '../../components-layout';
import { LoadingSpinner } from '../../components-elements';
import { ViewStyle } from 'react-native';

const styleSeasonFoodLoadingSpinner: ViewStyle = {
  flex: 1
};

export const SeasonFood: FC<ISeasonFoodProps> = ({
  isLoading,
  food,
  onFoodClick
}) => (
  !isLoading
   ? <SeasonDetailsContentWrapperConnector>
      <ImageGrid data={ food } onClick={onFoodClick} noResultsMessage='No results found' />
    </SeasonDetailsContentWrapperConnector>
   : <LoadingSpinner style={ styleSeasonFoodLoadingSpinner } />
);
