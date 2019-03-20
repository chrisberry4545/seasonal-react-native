import React, { SFC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodInputProps } from './SeasonFood.interface';

import {
  Grid,
  GridItem
} from '../../components-layout';

export const SeasonFood: SFC<ISeasonFoodInputProps> = ({
  food,
  navigation
}) => (
  <SeasonDetailsContentWrapperConnector navigation={ navigation }>
    <Grid>
      {
        food && food.map(({ id, name, imageUrlSmall }, index) =>  (
          <GridItem
            key={ id }
            imageUrlSmall={ imageUrlSmall }
            text={ name }
            evenGridItem={ index % 2 === 0 }
            />
        ))
      }
    </Grid>
  </SeasonDetailsContentWrapperConnector>
);
