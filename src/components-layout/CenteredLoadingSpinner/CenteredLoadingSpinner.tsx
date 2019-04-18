import React, { FC } from 'react';

import { ViewStyle } from 'react-native';
import { LoadingSpinner } from '../../components-elements';

const styleCenteredLoadingSpinner: ViewStyle = {
  flex: 1,
  minHeight: '100%',
  paddingBottom: 120
};

export const CenteredLoadingSpinner: FC<{}> = () => (
  <LoadingSpinner style={styleCenteredLoadingSpinner} />
);
