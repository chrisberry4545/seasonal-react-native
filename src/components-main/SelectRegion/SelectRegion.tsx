import React, { FC, Fragment } from 'react';

import { ISelectRegionProps } from './SelectRegion.interface';
import { SelectBox, TextHeadingMedium, ArrowIcon, BareButton } from '../../components-elements';
import { ViewStyle } from 'react-native';
import { sizes } from '../../styles/sizes';

const styleSelectRegionHeading: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: sizes.defaultHeadingMarginBottom
};

const styleSelectRegionText: ViewStyle = {
  marginLeft: 6
};

export const SelectRegion: FC<ISelectRegionProps> = ({
  regionsSelectOptions,
  onRegionSelected,
  goBackFromRegionSelection
}) => (
  <Fragment>
    <BareButton
      onClick={goBackFromRegionSelection}
      style={styleSelectRegionHeading}>
      <ArrowIcon size={26} />
      <TextHeadingMedium style={styleSelectRegionText}>
        Select your region
      </TextHeadingMedium>
    </BareButton>
    <SelectBox options={regionsSelectOptions}
      onSelected={(value) => onRegionSelected(value)} />
  </Fragment>
);
