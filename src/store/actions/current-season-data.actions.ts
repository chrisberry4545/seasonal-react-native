import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';
import { Action } from 'redux';

export interface ISetCurrentSeasonDataStart extends Action {
  seasonIndex: number;
}
export const SET_CURRENT_SEASON_DATA_START = 'SET_CURRENT_SEASON_DATA_START';
export function setCurrentSeasonDataStart(
  seasonIndex: number
): ISetCurrentSeasonDataStart {
  return {
    seasonIndex,
    type: SET_CURRENT_SEASON_DATA_START
  };
}

export interface ISetCurrentSeasonDataSuccess extends Action {
  currentSeasonData: IHydratedSeason;
}
export const SET_CURRENT_SEASON_DATA_SUCCESS =
  'SET_CURRENT_SEASON_DATA_SUCCESS';
export function setCurrentSeasonDataSuccess(
  currentSeasonData: IHydratedSeason
): ISetCurrentSeasonDataSuccess {
  return {
    currentSeasonData,
    type: SET_CURRENT_SEASON_DATA_SUCCESS
  };
}
