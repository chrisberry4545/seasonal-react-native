import React, { SFC } from 'react';

import {
  Grid,
  GridItem
} from '../../layouts';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';

export const SeasonFoodView: SFC<{
  season?: IHydratedSeason
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
