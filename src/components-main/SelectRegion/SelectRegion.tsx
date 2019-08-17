import React, { FC, Fragment } from 'react';

import { ISelectRegionProps } from './SelectRegion.interface';
import { SelectBox, ArrowIcon } from '../../components-elements';

import {
  BareButton
} from '../../components-elements';

export const SelectRegion: FC<ISelectRegionProps> = ({
  regionsSelectOptions,
  goBackFromRegionSelection,
  onRegionSelected
}) => (
  <Fragment>
    <BareButton onClick={goBackFromRegionSelection}>
      <ArrowIcon />
    </BareButton>
    <SelectBox options={regionsSelectOptions}
      onSelected={(value) => onRegionSelected(value)} />
  </Fragment>
);
