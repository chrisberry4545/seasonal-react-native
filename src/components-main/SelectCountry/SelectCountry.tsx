import React, { FC, Fragment } from 'react';

import { ISelectCountryProps } from './SelectCountry.interface';
import { SelectBox, TextHeadingMedium } from '../../components-elements';
import { ViewStyle } from 'react-native';
import { sizes } from '../../styles/sizes';

const styleSelectCountryHeading: ViewStyle = {
  marginBottom: sizes.defaultHeadingMarginBottom
};

export const SelectCountry: FC<ISelectCountryProps> = ({
  countriesSelectOptions,
  onCountrySelected
}) => (
  <Fragment>
    <TextHeadingMedium style={styleSelectCountryHeading}>
      Select your country
    </TextHeadingMedium>
    <SelectBox options={countriesSelectOptions}
      onSelected={(value: string) => onCountrySelected(value)} />
  </Fragment>
);
