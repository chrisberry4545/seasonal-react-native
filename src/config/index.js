const BACKEND_URL = process.env.BACKEND_URL
    || 'https://seasonal-backend.herokuapp.com';


export const SEASON_DATA_URL =
  process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`;
