import React, { FC } from 'react';

import {
  HeaderConnecter,
  SelectLocationConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const SettingsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <SelectLocationConnecter />
  </MainContainer>
);
