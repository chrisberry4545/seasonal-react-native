import React, { SFC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const MagnifyingGlassIcon: SFC<IIcon> = ({
  size
}) => (
  <IconBase name='ios-search' size={size} />
);
