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
  FoodDetailsPage,
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
import { store, setAllBasicSeasonDataSuccess } from './src/store';

interface IAppState {
  seasonData: IBaseSeason[] | undefined;
}

export default class App extends Component<{}, IAppState> {
  public async componentDidMount() {
    await loadFonts();
    const seasonData = await getAllSeasonData();
    store.dispatch(setAllBasicSeasonDataSuccess(
      seasonData
    ));
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
    const AppContainer = createAppContainer(DrawerNavigator);
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
