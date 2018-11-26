import React from 'react';
import { Text, View } from 'react-native';

import {
  styles
} from './../styles';

import {
  Grid
} from './grid';

import {
  GridItem
} from './grid-item';

import {
  goToLinkUrl
} from './../helpers';

const SeasonRecipeSection = ({ recipes }) => (
  <View style={ styles.cSeasonalDetailsSectionInner }>
    <Text style={ styles.cHeadingMed }>Recipe ideas</Text>
    <Grid>
    {
      recipes && recipes.map((recipe) =>  (
        <GridItem
          key={ recipe.id }
          imageUrlSmall={ recipe.imageUrlSmall }
          text={ recipe.name }
          onPress={ () => goToLinkUrl(recipe.linkUrl) }
        />
      ))
    }
    </Grid>
  </View>
);

export {
  SeasonRecipeSection
};
