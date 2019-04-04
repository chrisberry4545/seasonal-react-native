import React from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const ArrowIcon = ({
  size
}: IIcon) => (
  <IconBase name='ios-arrow-round-back' size={size} />
);
