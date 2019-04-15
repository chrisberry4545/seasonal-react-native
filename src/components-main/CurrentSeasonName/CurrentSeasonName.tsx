import React, { SFC } from 'react';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';

import { SeasonNameView } from '../../components-layout';

export const CurrentSeasonName: SFC<ICurrentSeasonName> = ({
  currentSeasonName
}) => (
  <SeasonNameView name={currentSeasonName} />
);
