import React from 'react';
import { Text, View } from 'react-native';

import {
  SeasonFoodSection
} from './season-food-section';

import {
  SeasonRecipeSection
} from './season-recipe-section';

import {
  styles
} from '../../styles';

const SeasonalDetails = ({ season }) => (
  <View style={ styles.cSeasonalDetails }>
    <Text style={ styles.cHeadingLarge }>{ season.name }</Text>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonFoodSection food={ season.food }/>
    </View>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonRecipeSection recipes={ season.recipes }/>
    </View>
  </View>
);

export {
  SeasonalDetails
};
