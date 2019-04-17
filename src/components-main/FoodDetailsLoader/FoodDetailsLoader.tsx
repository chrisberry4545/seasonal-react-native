import React, { SFC } from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { CenteredLoadingSpinner } from '../../components-layout';

export const FoodDetailsLoader: SFC<IFoodDetailsLoaderInputProps> = ({
  isLoading
}) => (
  isLoading
    ? <CenteredLoadingSpinner />
    : null
);
