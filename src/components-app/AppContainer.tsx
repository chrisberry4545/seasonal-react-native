import React, { SFC } from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  NavigationScreenRouteConfig
} from 'react-navigation';
import {
  AboutUsPage,
  FoodDetailsPage,
  SeasonDetailsPage
} from '../components-pages';
import {
  styles
} from '../styles';
import {
  setTopLevelNavigator,
  getCurrentSeasonIndex
} from '../services';
import { IAppContainerInputProps } from './AppContainer.interface';

export const AppContainer: SFC<IAppContainerInputProps> = ({
  seasonData
}) => {
  if (!seasonData) {
    return null;
  }
  const navigation: { [key: string]: NavigationScreenRouteConfig} =
  seasonData.reduce((navObject, { name }, index) => {
    navObject[`season-${index}`] = {
      navigationOptions: {
        drawerLabel: name
      },
      params: {
        seasonIndex: index
      },
      screen: SeasonDetailsPage
    };
    return navObject;
    }, {} as { [key: string]: NavigationScreenRouteConfig});
  navigation.moreInfo = {
    navigationOptions: {
      drawerLabel: 'About us'
    },
    screen: AboutUsPage
  };
  navigation.foodDetails = {
    navigationOptions: {
      drawerLabel: ' '
    },
    screen: FoodDetailsPage
  };
  const DrawerNavigator = createDrawerNavigator(navigation, {
    contentOptions: {
      activeTintColor: styles.colors.black,
      inactiveTintColor: styles.colors.primaryText
    },
    initialRouteName: `season-${getCurrentSeasonIndex()}`
  });
  const CreatedAppContainer = createAppContainer(DrawerNavigator);
  return <CreatedAppContainer ref={
    (navigatorRef) => setTopLevelNavigator(navigatorRef)
  }/>;
};
