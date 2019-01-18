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
    activeBackgroundColor: settings.colors.selectionColor,
    labelStyle: [styles.cTextLarge, styles.cSeasonalDetailsTabLabel],
    styles: styles.cSeasonalDetailsTab
  },
});

export {
  SeasonDetailsNavigation
};
