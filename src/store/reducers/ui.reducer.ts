import {
  SEARCH_BAR_CHANGED,
  ISearchBarChanged,
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR
} from '../actions';
import { IUiState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): IUiState => ({
  isSearchBarVisible: false
});

export function uiReducer(
  state = getDefaultState(),
  action: Action
): IUiState {
  switch (action.type) {
    case SEARCH_BAR_CHANGED:
      return {
        ...state,
        searchTerm: (action as ISearchBarChanged).newSearchTerm
      };
    case SHOW_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: true
      };
    case HIDE_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: false
      };
    default:
      return state;
  }
}
