import React, { FC } from 'react';

import { IRegionChangedPromptProps } from './RegionChangedPrompt.interface';
import { TextLarge, BareButton, Toast } from '../../components-elements';
import { ViewStyle } from 'react-native';

const styleRegionChangedPromptButton: ViewStyle = {
  marginTop: 4
};

export const RegionChangedPrompt: FC<IRegionChangedPromptProps> = ({
  isVisible,
  currentRegion,
  hideRegionChangedPrompt,
  showRegionSelector
}) => (
  <Toast onClose={hideRegionChangedPrompt} isVisible={Boolean(currentRegion && isVisible)}>
    <TextLarge>
      Your region is set to: { currentRegion && currentRegion.name }.
    </TextLarge>
    <BareButton onClick={showRegionSelector} style={styleRegionChangedPromptButton}>
      <TextLarge>
        If this is wrong, click here.
      </TextLarge>
    </BareButton>
  </Toast>
);
