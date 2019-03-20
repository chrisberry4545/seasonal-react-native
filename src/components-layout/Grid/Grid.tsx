import React, { SFC } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';

export const Grid: SFC<{}> = ({ children }) => (
  <View style={ styles.oGrid }>
    { children }
  </View>
);
