import {
  SeasonFoodConnector,
  SeasonRecipesConnector
} from '../../components-main';

import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  settings,
  styles
} from './../../styles';

export const SeasonDetailsPage = createBottomTabNavigator({
    Food: SeasonFoodConnector,
    Recipes: SeasonRecipesConnector
}, {
  tabBarOptions: {
    activeBackgroundColor: settings.colors.selectionColor,
    labelStyle: [styles.cTextLarge, styles.cSeasonalDetailsTabLabel],
    style: styles.cSeasonalDetailsTabWrapper
  }
});
