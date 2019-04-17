import React, { SFC } from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';

export const LoadingSpinner: SFC<{
  size?: 'small' | 'large',
  style?: ViewStyle
}> = ({
  size = 'large',
  style
} = {}) => (
  <ActivityIndicator size={size} style={style} />
);
