import React, { FC } from 'react';

import { ISelectLocationInputProps } from './SelectLocation.interface';
import { TopLoadingSpinner } from '../../components-layout';
import { SelectCountryConnecter } from '../SelectCountry/SelectCountry.connector';
import { SelectRegionConnecter } from '../SelectRegion/SelectRegion.connector';
import { TextHeadingMedium } from '../../components-elements';
import { View, ViewStyle } from 'react-native';

const styleSelectLocationHeading: ViewStyle = {
  marginBottom: 8
};

export const SelectLocation: FC<ISelectLocationInputProps> = ({
  isLoading,
  isRegionsMenuVisible
}) => (
  isLoading
    ? <TopLoadingSpinner />
    : <View>
      <TextHeadingMedium style={styleSelectLocationHeading}>
        Select Country
      </TextHeadingMedium>
      {
        isRegionsMenuVisible
          ? <SelectRegionConnecter />
          : <SelectCountryConnecter />
      }
    </View>
);
