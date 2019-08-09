import React, { FC } from 'react';

import { ViewStyle } from 'react-native';
import { LoadingSpinner } from '../../components-elements';

const styleTopLoadingSpinner: ViewStyle = {
  flex: 1,
  paddingTop: 80
};

export const TopLoadingSpinner: FC<{}> = () => (
  <LoadingSpinner style={styleTopLoadingSpinner} />
);
