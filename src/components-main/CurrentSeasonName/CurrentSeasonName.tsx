import React, { SFC } from 'react';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';

import { TextHeadingMedium } from '../../components-elements';

import { TextStyle } from 'react-native';

const styleCurrentSeasonName: TextStyle = {
  marginBottom: 6,
  marginTop: 8,
  textAlign: 'center'
};

export const CurrentSeasonName: SFC<ICurrentSeasonName> = ({
  currentSeasonName
}) => (
  <TextHeadingMedium style={ styleCurrentSeasonName }>
    {currentSeasonName}
  </TextHeadingMedium>
);
