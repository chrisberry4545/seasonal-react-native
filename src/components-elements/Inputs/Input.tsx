import React, { SFC } from 'react';

import { TextInput, TextInputProps, TextStyle } from 'react-native';

const styleInput: TextStyle = {
  padding: 10,
  width: '100%'
};

export const Input: SFC<TextInputProps> = ({
  style,
  ...rest
}) => (
  <TextInput {...rest} style={ [ styleInput, style ] } />
);
