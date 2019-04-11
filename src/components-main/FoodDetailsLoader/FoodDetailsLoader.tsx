import React from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { ViewStyle } from 'react-native';
import { LoadingSpinner } from '../../components-elements';

const styleFoodDetailsLoader: ViewStyle = {
  flex: 1,
  minHeight: '100%',
  paddingBottom: 100
};

export const FoodDetailsLoader = ({
  isLoading
}: IFoodDetailsLoaderInputProps) => (
  isLoading
    ? <LoadingSpinner style={styleFoodDetailsLoader} />
    : null
);
