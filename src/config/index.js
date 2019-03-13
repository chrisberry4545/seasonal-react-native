const BACKEND_URL = process.env.BACKEND_URL
    || 'https://seasonal-backend.herokuapp.com';


export const SEASON_DATA_URL =
  process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`;

export const PRIVACY_POLICY_URL =
  'https://chrisberry4545.github.io/eat-seasonal-privacy-policy/';
