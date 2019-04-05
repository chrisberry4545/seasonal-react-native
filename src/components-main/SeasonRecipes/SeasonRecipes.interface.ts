import {
  IRecipe
} from '@chrisb-dev/seasonal-shared';

export interface ISeasonRecipesInputProps {
  recipes: IRecipe[] | undefined;
}

export interface ISeasonRecipesDispatchProps {
  onRecipeClick: (recipeItemId: string) => void;
}

export interface ISeasonRecipesProps extends
  ISeasonRecipesInputProps, ISeasonRecipesDispatchProps {}
