import React, { SFC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const CrossIcon: SFC<IIcon> = ({
  size
}) => (
  <IconBase name='ios-close' size={size} />
);
