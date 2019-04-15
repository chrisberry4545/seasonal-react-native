import React from 'react';
import {
  AllSeasonsConnector,
  HeaderConnecter
} from '../../components-main';
import { MainContainer } from '../../components-layout';

export const AllSeasonsPage = () => (
  <MainContainer>
    <HeaderConnecter />
    <AllSeasonsConnector />
  </MainContainer>
);
