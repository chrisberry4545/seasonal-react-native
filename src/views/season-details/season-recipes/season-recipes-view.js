import React from 'react';
import { Text, View } from 'react-native';

import {
  styles
} from './../../../styles';

import {
  Grid,
  GridItem,
} from '../../layouts';

import {
  goToLinkUrl
} from '../../../helpers';

const SeasonRecipesView = ({ season }) => (
  Boolean(season && season.recipes && season.recipes.length > 0)
    ? (
      <View>
        <Text style={ styles.cHeadingMed }>Recipe ideas</Text>
          <Grid>
          {
            season.recipes.map((recipe) =>  (
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
    )
    :(
      <Text style={ [styles.cHeadingMed, styles.cSeasonalDetailsNoRecipesText] }>
        Sorry, there's currently no recipes for this season. Check back soon!
      </Text>
    )
);

export {
  SeasonRecipesView
};
