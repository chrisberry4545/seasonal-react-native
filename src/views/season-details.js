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
} from './../styles';

const SeasonalDetails = ({ season }) => (
  <View style={ { flex: 1 } }>
    <Text style={ styles.cHeadingLarge }>{ season.name }</Text>
    <View style={ { marginTop: 50, flex: 1 } }>
      <SeasonFoodSection food={ season.food }/>
    </View>
    <View style={ { marginTop: 200, flex: 1 } }>
      <SeasonRecipeSection recipes={ season.recipes }/>
    </View>
  </View>
);

export {
  SeasonalDetails
};
