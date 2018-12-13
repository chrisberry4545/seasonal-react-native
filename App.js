import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import {
  SeasonDetailsScreen,
  SeasonListScreen
} from './src/views';
import {
  SCREENS,
} from './src/const';
import {
  settings
} from './src/styles/settings';

const drawerNavigator =  createDrawerNavigator({
  [SCREENS.SEASON_DETAILS]: SeasonDetailsScreen,
  [SCREENS.SEASON_LIST]: SeasonListScreen
}, {
  contentOptions: {
    activeTintColor: settings.colors.black,
    inactiveTintColor: settings.colors.primaryText,
  }
});

const App = createAppContainer(drawerNavigator);
export default App;
