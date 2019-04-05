import { AppSeasonalEpic } from './seasonal-epic.type';
import { Action } from 'redux';
import { StateObservable, ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  GO_BACK_FROM_FOOD_DETAILS,
  GO_TO_ABOUT_US_PAGE
} from '../actions';
import {
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  FOOD_ITEM_CLICKED,
  CLOSE_MENU,
  OPEN_MENU,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  IFoodItemClicked,
  setCurrentFoodDetailsDataStart,
  IState,
  selectCurrentSeasonRecipesById
} from '@chrisb-dev/seasonal-shared';
import { withLatestFrom, map, tap, ignoreElements } from 'rxjs/operators';
import { goToLinkUrl } from '../../helpers';
import { navigate, closeDrawer, openDrawer } from '../../services';
import { ROUTES } from '../../const';

export const goToRecipeLink$: AppSeasonalEpic = (
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

export const goToFoodLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (action as IFoodItemClicked).foodItemId),
    tap((foodItemId) => navigate(ROUTES.FOOD_DETAILS, {
      id: foodItemId
    })),
    map((foodItemId) => setCurrentFoodDetailsDataStart(foodItemId))
  )
);

export const goToAboutUsPage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ABOUT_US_PAGE),
    tap(() => navigate(ROUTES.ABOUT_US)),
    ignoreElements()
  )
);

export const goToFoodTable$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      GO_BACK_FROM_FOOD_DETAILS,
      FOOD_DETAILS_SELECT_SEASON
    ),
    tap(() => navigate(ROUTES.SEASON_DETAILS)),
    ignoreElements()
  )
);

export const closeMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ABOUT_US_PAGE,
      SELECT_SEASON,
      CLOSE_MENU
    ),
    tap(() => closeDrawer()),
    ignoreElements()
  )
);

export const openMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(OPEN_MENU),
    tap(() => openDrawer()),
    ignoreElements()
  )
);
