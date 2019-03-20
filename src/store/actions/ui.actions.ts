import { Action } from 'redux';

export interface ISearchBarChanged extends Action {
  newSearchTerm: string;
}
export const SEARCH_BAR_CHANGED = 'SEARCH_BAR_CHANGED';
export function searchBarChanged(
  newSearchTerm: string
): ISearchBarChanged {
  return {
    newSearchTerm,
    type: SEARCH_BAR_CHANGED
  };
}

export const SHOW_SEARCH_BAR = 'SHOW_SEARCH_BAR';
export function showSearchBar(): Action {
  return {
    type: SHOW_SEARCH_BAR
  };
}

export const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';
export function hideSearchBar(): Action {
  return {
    type: HIDE_SEARCH_BAR
  };
}
