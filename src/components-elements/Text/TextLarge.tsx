import React, { SFC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextLarge: TextStyle = {
  ...textBase,
  fontSize: 16,
  lineHeight: 16
};

export const TextLarge: SFC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextLarge, style] }>
    { children }
  </Text>
);
