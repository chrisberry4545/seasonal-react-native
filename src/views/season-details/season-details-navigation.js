import {
  SeasonFoodScreen
} from './season-food';

import {
  SeasonRecipesScreen
} from './season-recipes';

import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  settings,
  styles
} from './../../styles';

const SeasonDetailsNavigation = createBottomTabNavigator({
    Food: SeasonFoodScreen,
    Recipes: SeasonRecipesScreen
}, {
  tabBarOptions: {
    activeTintColor: settings.colors.black,
    inactiveTintColor: settings.colors.primaryText,
    labelStyle: styles.cTextLarge
  }
});

export {
  SeasonDetailsNavigation
};
