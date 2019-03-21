import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import {
  createAppContainer,
  createDrawerNavigator,
  NavigationScreenRouteConfig
} from 'react-navigation';
import {
  AboutUsPage,
  SeasonDetailsPage
} from './src/components-pages';
import {
  styles
} from './src/styles';
import {
  getAllSeasonData,
  getCurrentSeasonIndex
} from './src/services';
import {
  loadFonts
} from './src/helpers';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared';
import { Provider } from 'react-redux';
import { store } from './src/store';

interface IAppState {
  seasonData: IBaseSeason[] | undefined;
}

export default class App extends Component<{}, IAppState> {
  public async componentDidMount() {
    await loadFonts();
    const seasonData = await getAllSeasonData();
    this.setState({
      seasonData
    });
  }

  public render() {
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
    const DrawerNavigator = createDrawerNavigator(navigation, {
      contentOptions: {
        activeTintColor: styles.colors.black,
        inactiveTintColor: styles.colors.primaryText
      },
      initialRouteName: this.state.seasonData[getCurrentSeasonIndex()].name
    });
    const AppContainer = createAppContainer(DrawerNavigator);
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
