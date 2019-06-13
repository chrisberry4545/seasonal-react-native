import React, { FC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter,
  RecipesForFoodConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';
import { ScrollView } from 'react-native-gesture-handler';

export const FoodDetailsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <FoodDetailsLoaderConnecter />
    <ScrollView>
      <FoodDetailsTopSectionConnecter />
      <RecipesForFoodConnecter />
      <SeasonsForFoodConnecter />
    </ScrollView>
  </MainContainer>
);
