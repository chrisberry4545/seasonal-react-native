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

const cSeasonalDetailsTabWrapper: ViewStyle = {
  marginTop: -20
};

const cSeasonalDetailsTabLabel: ViewStyle = {
  marginBottom: 16,
  marginTop: 10
};

export const SeasonDetailsPage = createBottomTabNavigator({
    Food: SeasonFoodConnector,
    Recipes: SeasonRecipesConnector
}, {
  tabBarOptions: {
    activeBackgroundColor: styles.colors.selectionColor,
    labelStyle: [styleTextLarge, cSeasonalDetailsTabLabel],
    style: cSeasonalDetailsTabWrapper
  }
});
