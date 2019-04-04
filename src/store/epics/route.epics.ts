import { SeasonalEpic } from './seasonal-epic.type';
import { Action } from 'redux';
import { StateObservable, ActionsObservable, ofType } from 'redux-observable';
import { IState } from '../../interfaces';
import { Observable } from 'rxjs';
import { RECIPE_ITEM_CLICKED, IRecipeItemClicked } from '../actions';
import { withLatestFrom, map } from 'rxjs/operators';
import { selectCurrentSeasonRecipesById } from '../selectors';
import { goToLinkUrl } from '../../helpers';

export const goToRecipeLink$: SeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(RECIPE_ITEM_CLICKED),
    withLatestFrom(state$),
    map(([
      action,
      state
    ]) => selectCurrentSeasonRecipesById(
        (action as IRecipeItemClicked).recipeItemId
      )(state)
    ),
    map((recipe) => {
      if (recipe) {
        goToLinkUrl(recipe.linkUrl);
      }
      return { type: '' };
    })
  )
);
