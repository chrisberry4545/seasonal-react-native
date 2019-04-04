import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const IconBase = ({
  name,
  size
}: {
  name: string,
  size?: number
}) => (
  <Ionicons name={name} size={size} />
);
