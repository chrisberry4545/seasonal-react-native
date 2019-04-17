import React, { SFC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const BurgerIcon: SFC<IIcon> = ({
  size
}) => (
  <IconBase name='ios-menu' size={size} />
);
