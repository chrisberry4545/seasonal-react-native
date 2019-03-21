import React, { SFC } from 'react';
import { View, ViewStyle } from 'react-native';

const styleGrid: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 8
};

export const Grid: SFC<{}> = ({ children }) => (
  <View style={ styleGrid }>
    { children }
  </View>
);
