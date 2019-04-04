import React from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { ActivityIndicator, View, ViewStyle } from 'react-native';

const styleFoodDetailsLoader: ViewStyle = {
  flex: 1
};

export const FoodDetailsLoader = ({
  isLoading
}: IFoodDetailsLoaderInputProps) => (
  isLoading
    ? <View style={styleFoodDetailsLoader}>
      <ActivityIndicator size='large'  style={styleFoodDetailsLoader} />
    </View>
    : null
);
