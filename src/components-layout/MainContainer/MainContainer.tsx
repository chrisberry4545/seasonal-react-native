import React from 'react';
import {
  styles
} from '../../styles';
import { ViewStyle, View } from 'react-native';
import { SFC } from 'react';

const styleMainContainer: ViewStyle = {
  backgroundColor: styles.colors.backgroundColor,
  flex: 1,
  padding: 20
};

export const MainContainer: SFC<{}> = ({
  children
}) => (
  <View style={ styleMainContainer }>
    { children }
  </View>
);
