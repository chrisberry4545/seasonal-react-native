import {
    SEASON_DATA_URL
} from '././../config';

const getAllSeasonData = () => {
    return fetch(
        'http://localhost:3000/season-data'
    ).then((resp) => resp.json());
};

const getSeasonDataBySeasonIndex = (seasonIndex) => {
    return fetch(
        `http://localhost:3000/season-data/${seasonIndex}`
    ).then((resp) => resp.json());
};

const getCurrentSeasonData = () => {
    const currentSeasonIndex = new Date().getUTCMonth();
    return getSeasonDataBySeasonIndex(currentSeasonIndex);
};

export {
    getAllSeasonData,
    getCurrentSeasonData,
    getSeasonDataBySeasonIndex
};
