import React, { SFC } from 'react';
import { Text } from 'react-native';

import {
  styles
} from './../../styles';

import {
  Grid,
  GridItem
} from '../../components-layout';

import {
  goToLinkUrl
} from '../../helpers';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesInputProps } from './SeasonRecipes.interface';

export const SeasonRecipes: SFC<ISeasonRecipesInputProps> = ({
  recipes,
  navigation
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
  {
    Boolean(recipes && recipes.length > 0)
      ? (
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
      )
      : (
        <Text
          style={ [styles.cHeadingMed, styles.cSeasonalDetailsNoRecipesText] }>
          Sorry, there's currently no recipes for this season. Check back soon!
        </Text>
      )
    }
    </SeasonDetailsContentWrapperConnector>
);
