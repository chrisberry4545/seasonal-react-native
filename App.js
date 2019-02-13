import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import {
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

export default class App extends Component {
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

    const navigation = this.state.seasonData
      .reduce((navObject, { name }, index) => {
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
        }, {});
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
