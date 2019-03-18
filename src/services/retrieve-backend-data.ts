import {
    SEASON_DATA_URL
} from '././../config';

import {
  BaseSeason,
  HydratedSeason
} from '@chrisb-dev/seasonal-shared';

export const getAllSeasonData = (): Promise<BaseSeason[]> => {
  return fetch(SEASON_DATA_URL).then((resp) => resp.json());
};

export const getSeasonDataBySeasonIndex = (
  seasonIndex: number
): Promise<HydratedSeason> => {
  return fetch(
      `${SEASON_DATA_URL}/${seasonIndex}`
  ).then((resp) => resp.json());
};

export const getCurrentSeasonIndex = (): number => new Date().getUTCMonth();
