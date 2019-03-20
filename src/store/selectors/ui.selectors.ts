import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

const selectUiState = (state: IState) => state.ui;

export const selectCurrentSearchTerm = createSelector(
  selectUiState,
  (uiState): string | undefined => uiState.searchTerm &&
    uiState.searchTerm.toLowerCase()
);

export const selectIsSearchBarVisible = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isSearchBarVisible
);
