import React, { FC } from 'react';

import { ISelectCountryProps } from './SelectCountry.interface';
import { SelectBox } from '../../components-elements';

export const SelectCountry: FC<ISelectCountryProps> = ({
  countriesSelectOptions,
  onCountrySelected
}) => (
  <SelectBox options={countriesSelectOptions}
    onSelected={(value: string) => onCountrySelected(value)} />
);
