import React from 'react';

import {
  Grid,
  GridItem,
} from '../../layouts';

const SeasonFoodView = ({ season }) => (
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

export {
  SeasonFoodView
};
