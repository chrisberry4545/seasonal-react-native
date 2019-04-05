import {
  SeasonFoodConnector,
  SeasonRecipesConnector
} from '../../components-main';

import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  styles
} from './../../styles';

import {
  styleTextLarge
} from '../../components-elements/Text';
import { ViewStyle } from 'react-native';

import { ROUTES } from '../../const';

const cSeasonalDetailsTabWrapper: ViewStyle = {
  marginTop: -20
};

const cSeasonalDetailsTabLabel: ViewStyle = {
  marginBottom: 16,
  marginTop: 10
};

export const SeasonDetailsPage = createBottomTabNavigator({
    [ROUTES.FOOD_TAB]: {
      navigationOptions: {
        tabBarLabel: 'Food'
      },
      screen: SeasonFoodConnector
    },
    [ROUTES.RECIPES_TAB]: {
      navigationOptions: {
        tabBarLabel: 'Recipes'
      },
      screen: SeasonRecipesConnector
    }
}, {
  tabBarOptions: {
    activeBackgroundColor: styles.colors.selectionColor,
    labelStyle: [styleTextLarge, cSeasonalDetailsTabLabel],
    style: cSeasonalDetailsTabWrapper
  }
});
