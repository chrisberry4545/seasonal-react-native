const BACKEND_URL = process.env.BACKEND_URL
    || 'http://localhost:3000';

const config = {
    SEASON_DATA_URL: process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`
};

export {
    config
};
