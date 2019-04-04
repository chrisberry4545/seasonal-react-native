import {
  ISeasonRecipesInputProps, ISeasonRecipesDispatchProps
} from './SeasonRecipes.interface';

import { connect } from 'react-redux';
import {
  SeasonRecipes
} from './SeasonRecipes';
import {
  selectVisibleRecipeData, recipeItemClicked
} from '../../store';
import { IState } from '../../interfaces';

import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonRecipesInputProps => {
  return {
    recipes: selectVisibleRecipeData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonRecipesDispatchProps => ({
  onRecipeClick: (recipeItemId) => (
    dispatch(recipeItemClicked(recipeItemId))
  )
});

export const SeasonRecipesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonRecipes);
