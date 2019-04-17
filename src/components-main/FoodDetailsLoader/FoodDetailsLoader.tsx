import React from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { CenteredLoadingSpinner } from '../../components-layout';

export const FoodDetailsLoader = ({
  isLoading
}: IFoodDetailsLoaderInputProps) => (
  isLoading
    ? <CenteredLoadingSpinner />
    : null
);
