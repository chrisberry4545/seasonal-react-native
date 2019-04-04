import React from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const CrossIcon = ({
  size
}: IIcon) => (
  <IconBase name='ios-close' size={size} />
);
