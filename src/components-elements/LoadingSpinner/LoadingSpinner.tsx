import React from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';

export const LoadingSpinner = ({
  size = 'large',
  style
}: {
  size?: 'small' | 'large',
  style?: ViewStyle
} = {}) => (
  <ActivityIndicator size={size} style={style} />
);
