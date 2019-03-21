import React, { SFC } from 'react';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';

import { Text } from 'react-native';

import {
  styles
} from '../../styles';

export const CurrentSeasonName: SFC<ICurrentSeasonName> = ({
  currentSeasonName
}) => (
  <Text style={ [ styles.cCurrentSeasonName, styles.cHeadingMed ] }>
    {currentSeasonName}
  </Text>
);
