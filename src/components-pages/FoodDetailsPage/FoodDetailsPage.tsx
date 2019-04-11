import React, { SFC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';
import { ScrollView } from 'react-native-gesture-handler';

export const FoodDetailsPage: SFC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <FoodDetailsLoaderConnecter />
    <ScrollView>
      <FoodDetailsTopSectionConnecter />
      <SeasonsForFoodConnecter />
    </ScrollView>
  </MainContainer>
);
