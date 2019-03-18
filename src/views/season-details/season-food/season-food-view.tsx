import React, { SFC } from 'react';

import {
  Grid,
  GridItem,
} from '../../layouts';
import { HydratedSeason } from '@chrisb-dev/seasonal-shared';

export const SeasonFoodView: SFC<{
  season?: HydratedSeason
}> = ({ season }) => (
  <Grid>
    {
      season && season.food && season.food.map((food, index) =>  (
        <GridItem
          key={ food.id }
          imageUrlSmall={ food.imageUrlSmall }
          text={ food.name }
          evenGridItem={ index % 2 === 0 }
          />
      ))
    }
  </Grid>
);
