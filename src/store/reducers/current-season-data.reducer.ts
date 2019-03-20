import {
  SET_CURRENT_SEASON_DATA_START,
  SET_CURRENT_SEASON_DATA_SUCCESS,
  ISetCurrentSeasonDataSuccess
} from '../actions';
import { ICurrentSeasonDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): ICurrentSeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function currentSeasonDataReducer(
  state = getDefaultState(),
  action: Action
): ICurrentSeasonDataState {
  switch (action.type) {
    case SET_CURRENT_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as ISetCurrentSeasonDataSuccess).currentSeasonData,
        isLoading: false
      };
    default:
      return state;
  }
}
