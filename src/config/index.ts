const BACKEND_URL: string = process.env.BACKEND_URL
    || 'https://seasonal-backend.herokuapp.com';

export const SEASON_DATA_URL: string =
  process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`;

export const PRIVACY_POLICY_URL: string =
  'https://chrisberry4545.github.io/eat-seasonal-privacy-policy/';
