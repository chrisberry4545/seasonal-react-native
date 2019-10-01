import { Action } from 'redux';

export const GO_BACK_FROM_FOOD_DETAILS = 'GO_BACK_FROM_FOOD_DETAILS';
export function goBackFromFoodDetails(): Action {
  return {
    type: GO_BACK_FROM_FOOD_DETAILS
  };
}

export const GO_TO_ABOUT_US_PAGE = 'GO_TO_ABOUT_US_PAGE';
export function goToAboutUsPage(): Action {
  return {
    type: GO_TO_ABOUT_US_PAGE
  };
}

export const GO_TO_SETTINGS_PAGE = 'GO_TO_SETTINGS_PAGE';
export function goToSettingsPage() {
  return {
    type: GO_TO_SETTINGS_PAGE
  };
}

export const GO_BACK_FROM_SETTINGS_PAGE = 'GO_BACK_FROM_SETTINGS_PAGE';
export function goBackFromSettingsPage() {
  return {
    type: GO_BACK_FROM_SETTINGS_PAGE
  };
}
