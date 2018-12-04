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

const SeasonalDetails = ({ season }) => (
  <ScrollView style={ styles.cSeasonalDetails }>
    <Text style={ [styles.cHeadingLarge, styles.cSeasonalDetailsHeading] }>
      Seasonal
    </Text>
    <Text style={ [styles.cHeadingMed, styles.cSeasonalDetailsHeading] }>
      { season.name }
    </Text>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonFoodSection food={ season.food }/>
    </View>
    <View style={ styles.cSeasonalDetailsSection }>
      <SeasonRecipeSection recipes={ season.recipes }/>
    </View>
  </ScrollView>
);

export {
  SeasonalDetails
};
