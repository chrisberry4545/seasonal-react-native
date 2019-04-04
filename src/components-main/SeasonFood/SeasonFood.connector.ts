import {
  ISeasonFoodInputProps, ISeasonFoodDispatchProps
} from './SeasonFood.interface';

import { connect } from 'react-redux';
import {
  SeasonFood
} from './SeasonFood';
import {
  selectVisibleFoodData, foodItemClicked
} from '../../store';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonFoodInputProps => {
  return {
    food: selectVisibleFoodData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonFoodDispatchProps => {
  return {
    onFoodClick: (foodItemId) => dispatch(foodItemClicked(foodItemId))
  };
};

export const SeasonFoodConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonFood);
