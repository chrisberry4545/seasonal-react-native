import { NavigationActions, NavigationParams } from 'react-navigation';
import { NavigationContainerComponent } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { ROUTES } from '../const';

let navigator: NavigationContainerComponent | null;

export const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null
) => {
  navigator = navigatorRef;
};

export const navigate = (
  routeName: string,
  params?: NavigationParams
) => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        params,
        routeName
      })
    );
  }
};

export const navigateBackOne = () => {
  if (navigator) {
    navigator.dispatch(NavigationActions.back());
  }
};

export const openDrawer = () => {
  if (navigator) {
    navigator.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigator) {
    navigator.dispatch(DrawerActions.closeDrawer());
  }
};

export const getCurrentNavigatorRoute = () => {
  if (navigator) {
    const routeIndex = (navigator.state as any).nav.index;
    return (navigator.state as any).nav.routes[routeIndex];
  }
  return null;
};

export const getIsCurrentRouteAllSeasons = () => {
  const currentRoute = getCurrentNavigatorRoute();
  if (currentRoute) {
    return currentRoute.routeName === ROUTES.ALL_SEASONS;
  }
  return false;
};

export const getIsCurrentRouteSeasonDetails = () => {
  const currentRoute = getCurrentNavigatorRoute();
  if (currentRoute) {
    return currentRoute.routeName === ROUTES.SEASON_DETAILS;
  }
  return false;
};

export const getIsCurrentRouteAboutUs = () => {
  const currentRoute = getCurrentNavigatorRoute();
  if (currentRoute) {
    return currentRoute.routeName === ROUTES.ABOUT_US;
  }
  return false;
};
