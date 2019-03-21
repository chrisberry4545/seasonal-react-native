import React, { SFC } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  IButton
} from './Button.interface';

export const BareButton: SFC<IButton> = ({
  activeOpacity,
  children,
  onPress,
  style
}) => (
  <TouchableOpacity
    style={ style }
    onPress={onPress}
    activeOpacity={activeOpacity}>
    { children }
  </TouchableOpacity>
);
