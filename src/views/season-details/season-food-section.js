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
    <Grid>
      {
        food && food.map((food, index) =>  (
          <GridItem
            key={ food.id }
            imageUrlSmall={ food.imageUrlSmall }
            text={ food.name }
            evenGridItem={ index % 2 === 0 }
            />
        ))
      }
    </Grid>
  </View>
);

export {
  SeasonFoodSection
};
