import React, { FC } from 'react';

import { ISelectLocationInputProps } from './SelectLocation.interface';
import { TopLoadingSpinner } from '../../components-layout';
import { SelectCountryConnecter } from '../SelectCountry/SelectCountry.connector';
import { SelectRegionConnecter } from '../SelectRegion/SelectRegion.connector';

export const SelectLocation: FC<ISelectLocationInputProps> = ({
  isLoading,
  isRegionsMenuVisible
}) => (
  isLoading
    ? <TopLoadingSpinner />
    : isRegionsMenuVisible
      ? <SelectRegionConnecter />
      : <SelectCountryConnecter />
);
