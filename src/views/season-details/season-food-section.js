import React from 'react';
import { Text, View } from 'react-native';

import {
  Grid
} from '../layouts/grid';

import {
  GridItem
} from '../layouts/grid-item';

import {
  styles
} from '../../styles';

const SeasonFoodSection = ({ food }) => (
  <View style={ styles.cSeasonalDetailsSectionInner }>
    <Text style={ styles.cHeadingMed }>Currently in season</Text>
    <Grid>
      {
        food && food.map((food) =>  (
          <GridItem
            key={ food.id }
            imageUrlSmall={ food.imageUrlSmall }
            text={ food.name }
            />
        ))
      }
    </Grid>
  </View>
);

export {
  SeasonFoodSection
};
