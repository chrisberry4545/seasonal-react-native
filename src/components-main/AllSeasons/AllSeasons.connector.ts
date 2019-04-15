import { connect } from 'react-redux';
import {
  AllSeasons
} from './AllSeasons';

import { IState } from '../../interfaces';
import {
  IAllSeasonsInputProps,
  IAllSeasonsDispatchProps
} from './AllSeasons.interface';
import { Dispatch } from 'redux';
import {
  selectIsAllSeasonsWithFoodDataLoading,
  selectAllSeasonsVisibleFoodData,
  increaseNumberOfAllFoodSeasonsInView,
  foodItemClicked
} from '@chrisb-dev/seasonal-shared';

const mapStateToProps = (
  state: IState
): IAllSeasonsInputProps => ({
  isLoading: selectIsAllSeasonsWithFoodDataLoading(state),
  seasons: selectAllSeasonsVisibleFoodData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsDispatchProps => ({
  increaseNumberOfAllFoodSeasonsInView: () => (
    dispatch(increaseNumberOfAllFoodSeasonsInView())
  ),
  onFoodClick: (foodItemId: string) => dispatch(foodItemClicked(foodItemId))
});

export const AllSeasonsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasons);
