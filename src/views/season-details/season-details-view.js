import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import {
  SeasonFoodSection
} from './season-food-section';

import {
  SeasonRecipeSection
} from './season-recipe-section';

import {
  styles
} from '../../styles';

const SeasonalDetailsView = ({ season }) => (
  <ScrollView style={ styles.cSeasonalDetails }>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonFoodSection food={ season.food }/>
    </View>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonRecipeSection recipes={ season.recipes }/>
    </View>
  </ScrollView>
);

export {
  SeasonalDetailsView
};
