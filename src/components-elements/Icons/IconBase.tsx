import React, { SFC } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const IconBase: SFC<{
  name: string,
  size?: number
}> = ({
  name,
  size
}) => (
  <Ionicons name={name} size={size} />
);
