import React, { SFC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const ArrowIcon: SFC<IIcon> = ({
  size
}) => (
  <IconBase name='ios-arrow-round-back' size={size} />
);
