import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const IconBase: FC<{
  name: string,
  size?: number
}> = ({
  name,
  size
}) => (
  <Ionicons name={name} size={size} />
);
