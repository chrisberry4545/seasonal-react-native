import React, { SFC } from 'react';
import { Text } from 'react-native';

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
import { HydratedSeason } from '@chrisb-dev/seasonal-shared';

export const SeasonRecipesView: SFC<{
  season?: HydratedSeason
}> = ({ season }) => (
  Boolean(season && season.recipes && season.recipes.length > 0)
    ? (
        <Grid>
        {
          season && season.recipes && season.recipes.map((recipe) =>  (
            <GridItem
              key={ recipe.id }
              imageUrlSmall={ recipe.imageUrlSmall }
              text={ recipe.name }
              onPress={ () => goToLinkUrl(recipe.linkUrl) }
            />
          ))
        }
        </Grid>
    )
    :(
      <Text style={ [styles.cHeadingMed, styles.cSeasonalDetailsNoRecipesText] }>
        Sorry, there's currently no recipes for this season. Check back soon!
      </Text>
    )
);
