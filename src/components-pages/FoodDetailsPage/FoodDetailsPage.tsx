import React, { SFC } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  NavigationBar
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const FoodDetailsPage: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <MainContainer>
    <NavigationBar navigation={ navigation } />
    <FoodDetailsTopSectionConnecter navigation={ navigation } />
    <FoodDetailsLoaderConnecter />
    <SeasonsForFoodConnecter navigation={ navigation }/>
  </MainContainer>
);
