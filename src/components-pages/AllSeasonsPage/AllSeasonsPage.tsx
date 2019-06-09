import React, { SFC } from 'react';
import {
  AllSeasonsConnector,
  HeaderConnecter,
  AllSeasonsGraphConnector
} from '../../components-main';
import { MainContainer } from '../../components-layout';

export const AllSeasonsPage: SFC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <AllSeasonsGraphConnector />
    <AllSeasonsConnector />
  </MainContainer>
);
