import {
    SEASON_DATA_URL
} from '././../config';

const getAllSeasonData = () => {
  return fetch(SEASON_DATA_URL).then((resp) => resp.json());
};

const getSeasonDataBySeasonIndex = (seasonIndex) => {
  return fetch(
      `${SEASON_DATA_URL}/${seasonIndex}`
  ).then((resp) => resp.json());
};

const getCurrentSeasonIndex = () => new Date().getUTCMonth();

export {
    getAllSeasonData,
    getCurrentSeasonIndex,
    getSeasonDataBySeasonIndex
};
