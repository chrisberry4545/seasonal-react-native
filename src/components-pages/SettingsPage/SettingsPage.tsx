import React, { FC } from 'react';

import {
  HeaderConnecter,
  SelectLocationConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';
import { View, ViewStyle } from 'react-native';

const styleSettingsPageContent: ViewStyle = {
  marginTop: 16
};

export const SettingsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <View style={styleSettingsPageContent}>
      <SelectLocationConnecter />
    </View>
  </MainContainer>
);
