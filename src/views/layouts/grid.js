import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';

const Grid = ({ children }) => (
  <View style={ styles.oGrid }>
    { children }
  </View>
);

export {
  Grid
};
