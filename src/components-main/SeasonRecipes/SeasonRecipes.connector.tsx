import {
  ISeasonRecipesInputProps
} from './SeasonRecipes.interface';

import { connect } from 'react-redux';
import {
  SeasonRecipes
} from './SeasonRecipes';
import {
  selectVisibleRecipeData
} from '../../store';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ISeasonRecipesInputProps => {
  return {
    recipes: selectVisibleRecipeData(state)
  };
};

export const SeasonRecipesConnector = connect(
  mapStateToProps
)(SeasonRecipes);
