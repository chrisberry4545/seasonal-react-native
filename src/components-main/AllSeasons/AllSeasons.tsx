import React, { Fragment } from 'react';

import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import { LoadingSpinner } from '../../components-elements';
import { ImageGrid, SeasonNameView } from '../../components-layout';
import { FlatList } from 'react-native-gesture-handler';

export const AllSeasons = ({
  isLoading,
  increaseNumberOfAllFoodSeasonsInView,
  onFoodClick,
  seasons
}: IAllSeasonsProps) => (
  isLoading && seasons
    ? <LoadingSpinner />
    : <FlatList
        data={seasons!}
        renderItem={({ item }) => (
          <Fragment>
            <SeasonNameView name={item.name} />
            <ImageGrid data={item.food} onClick={onFoodClick} />
          </Fragment>
        )}
        keyExtractor={(item) => item.name}
        onEndReached={increaseNumberOfAllFoodSeasonsInView}
        onEndReachedThreshold={2} />
);
