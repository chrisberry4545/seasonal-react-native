import React from 'react';
import { Text, View } from 'react-native';

import {
  FoodThumbnail
} from './food-thumbnail';

import {
  styles
} from './../styles';

const SeasonFoodSection = ({ food }) => (
  <View style={ { flex: 1 } }>
    <Text style={ styles.cHeadingMed }>Currently in season</Text>
    <View style={ styles.oGrid }>
      {
        food && food.map((food) =>  (
          <FoodThumbnail key={ food.id } food={ food } />
        ))
      }
    </View>
  </View>
);

export {
  SeasonFoodSection
};
