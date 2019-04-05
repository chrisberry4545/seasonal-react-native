import React, { SFC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const FoodDetailsPage: SFC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <FoodDetailsTopSectionConnecter />
    <FoodDetailsLoaderConnecter />
    <SeasonsForFoodConnecter />
  </MainContainer>
);
