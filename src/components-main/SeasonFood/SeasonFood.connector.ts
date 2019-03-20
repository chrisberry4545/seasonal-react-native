import {
  ISeasonFoodInputProps
} from './SeasonFood.interface';

import { connect } from 'react-redux';
import {
  SeasonFood
} from './SeasonFood';
import {
  selectVisibleFoodData
} from '../../store';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ISeasonFoodInputProps => {
  return {
    food: selectVisibleFoodData(state)
  };
};

export const SeasonFoodConnector = connect(
  mapStateToProps
)(SeasonFood);
