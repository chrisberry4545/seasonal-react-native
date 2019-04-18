import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const BurgerIcon: FC<IIcon> = ({
  size
}) => (
  <IconBase name='ios-menu' size={size} />
);
