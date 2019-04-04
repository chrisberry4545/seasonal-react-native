import React from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const BurgerIcon = ({
  size
}: IIcon) => (
  <IconBase name='ios-menu' size={size} />
);
