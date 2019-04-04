
import { createSelector } from 'reselect';
import { IState } from '../../interfaces';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared';

const selectAllBasicSeasonDataState = (
  state: IState
) => state.allBasicSeasonData;

export const selectIsBasicSeasonDataLoading = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): boolean => allBasicSeasonData.isLoading
);

export const selectAllBasicSeasonData = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): IBaseSeason[] | undefined => allBasicSeasonData.data
);
