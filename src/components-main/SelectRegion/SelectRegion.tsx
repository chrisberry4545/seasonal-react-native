import React, { FC, Fragment } from 'react';

import { ISelectRegionProps } from './SelectRegion.interface';
import { TextHeadingMedium, GroupedSelectBox } from '../../components-elements';
import { ViewStyle } from 'react-native';
import { sizes } from '../../styles/sizes';

const styleSelectRegionHeading: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: sizes.defaultHeadingMarginBottom
};

export const SelectRegion: FC<ISelectRegionProps> = ({
  countrySelectGroups,
  onRegionSelected
}) => (
  <Fragment>
    <TextHeadingMedium style={styleSelectRegionHeading}>
      Select your region
    </TextHeadingMedium>
    <GroupedSelectBox groups={countrySelectGroups} onSelected={onRegionSelected} />
  </Fragment>
);
