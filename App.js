import React, { Component } from 'react';
import { AppLoading } from 'expo';
import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import {
  SeasonDetailsScreen,
} from './src/views';
import {
  settings
} from './src/styles/settings';
import {
  getAllSeasonData
} from './src/services';

export default class App extends Component {
  async componentDidMount() {
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
          screen: SeasonDetailsScreen
        };
        return navObject;
        }, {});
    const DrawerNavigator = createDrawerNavigator(navigation, {
      contentOptions: {
        activeTintColor: settings.colors.black,
        inactiveTintColor: settings.colors.primaryText,
      }
    });
    const AppContainer = createAppContainer(DrawerNavigator);
    return <AppContainer />;
  }
}
