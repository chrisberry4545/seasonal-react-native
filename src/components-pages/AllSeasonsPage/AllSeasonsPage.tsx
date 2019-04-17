import React, { SFC } from 'react';
import {
  AllSeasonsConnector,
  HeaderConnecter
} from '../../components-main';
import { MainContainer } from '../../components-layout';

export const AllSeasonsPage: SFC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <AllSeasonsConnector />
  </MainContainer>
);
