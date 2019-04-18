import React, { FC } from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { CenteredLoadingSpinner } from '../../components-layout';

export const FoodDetailsLoader: FC<IFoodDetailsLoaderInputProps> = ({
  isLoading
}) => (
  isLoading
    ? <CenteredLoadingSpinner />
    : null
);
