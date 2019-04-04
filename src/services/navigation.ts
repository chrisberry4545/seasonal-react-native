import { NavigationActions, NavigationParams } from 'react-navigation';
import { NavigationContainerComponent } from 'react-navigation';
import { DrawerActions } from 'react-navigation';

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
