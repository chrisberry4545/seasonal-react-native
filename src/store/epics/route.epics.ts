import { SeasonalEpic } from './seasonal-epic.type';
import { Action } from 'redux';
import { StateObservable, ActionsObservable, ofType } from 'redux-observable';
import { IState } from '../../interfaces';
import { Observable } from 'rxjs';
import {
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  GO_BACK_FROM_FOOD_DETAILS,
  FOOD_ITEM_CLICKED,
  CLOSE_MENU,
  OPEN_MENU,
  FOOD_DETAILS_SELECT_SEASON
} from '../actions';
import { withLatestFrom, map, tap, ignoreElements } from 'rxjs/operators';
import { selectCurrentSeasonRecipesById } from '../selectors';
import { goToLinkUrl } from '../../helpers';
import { navigate, closeDrawer, openDrawer } from '../../services';

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
    tap((recipe) => {
      if (recipe) {
        goToLinkUrl(recipe.linkUrl);
      }
    }),
    ignoreElements()
  )
);

export const goToFoodLink$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    tap(() => navigate('foodDetails')),
    ignoreElements()
  )
);

export const goToFoodTable$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_BACK_FROM_FOOD_DETAILS,
      FOOD_DETAILS_SELECT_SEASON
    ),
    tap(() => navigate('season-0')),
    ignoreElements()
  )
);

export const closeMenu$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(CLOSE_MENU),
    tap(() => closeDrawer()),
    ignoreElements()
  )
);

export const openMenu$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(OPEN_MENU),
    tap(() => openDrawer()),
    ignoreElements()
  )
);
