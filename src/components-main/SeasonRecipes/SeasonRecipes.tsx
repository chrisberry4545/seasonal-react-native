import React, { SFC } from 'react';

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
import { TextHeadingMedium } from '../../components-elements';
import { TextStyle } from 'react-native';

const styleSeasonalDetailsNoRecipesText: TextStyle = {
  marginTop: 20,
  textAlign: 'center'
};

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
        <TextHeadingMedium
          style={ styleSeasonalDetailsNoRecipesText }>
          Sorry, there's currently no recipes for this season. Check back soon!
        </TextHeadingMedium>
      )
    }
    </SeasonDetailsContentWrapperConnector>
);
