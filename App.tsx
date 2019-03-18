import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import {
  createAppContainer,
  createDrawerNavigator,
  NavigationScreenRouteConfig
} from 'react-navigation';
import {
  AboutUsScreen,
  SeasonDetailsNavigation
} from './src/views';
import {
  settings
} from './src/styles/settings';
import {
  getAllSeasonData,
  getCurrentSeasonIndex,
} from './src/services';
import {
  loadFonts
} from './src/helpers';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared';

interface AppState {
  seasonData: IBaseSeason[] | undefined;
}

export default class App extends Component<{}, AppState> {
  async componentDidMount() {
    await loadFonts();
    const seasonData = await getAllSeasonData();
    this.setState({
      seasonData
    });
  }

  render() {
    if (!this.state || !this.state.seasonData) {
      return <AppLoading />;
    }

    const navigation: { [key: string]: NavigationScreenRouteConfig} =
      this.state.seasonData.reduce((navObject, { name }, index) => {
        navObject[name] = {
          navigationOptions: {
            drawerLabel: name
          },
          params: {
            seasonIndex: index
          },
          screen: SeasonDetailsNavigation
        };
        return navObject;
        }, {} as { [key: string]: NavigationScreenRouteConfig});
    navigation.moreInfo = {
      navigationOptions: {
        drawerLabel: 'About us'
      },
      screen: AboutUsScreen
    };
    const DrawerNavigator = createDrawerNavigator(navigation, {
      contentOptions: {
        activeTintColor: settings.colors.black,
        inactiveTintColor: settings.colors.primaryText,
      },
      initialRouteName: this.state.seasonData[getCurrentSeasonIndex()].name
    });
    const AppContainer = createAppContainer(DrawerNavigator);
    return <AppContainer />;
  }
}
