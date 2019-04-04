const BACKEND_URL: string = process.env.BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/v1';

export const SEASON_DATA_URL: string =
  process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`;

export const FOOD_DETAILS_DATA_URL =
  process.env.FOOD_DETAILS_DATA_URL || `${BACKEND_URL}/food-data`;

export const PRIVACY_POLICY_URL: string =
  'https://chrisberry4545.github.io/eat-seasonal-privacy-policy/';
