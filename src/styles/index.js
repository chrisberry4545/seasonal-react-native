import { settings } from './settings';
import { StyleSheet } from 'react-native';
import { oMainContainer } from './o-main-container';
import { oGrid } from './o-grid';
import { cHeadings } from './c-headings';
import { cText } from './c-text';
import { cLoadingIndicator } from './c-loading-indicator';
import { cNavigationBar } from './c-navigation-bar';
import { cSeasonalDetails } from './c-seasonal-details';

const styles = StyleSheet.create({
  ...oMainContainer,
  ...oGrid,
  ...cHeadings,
  ...cText,
  ...cLoadingIndicator,
  ...cNavigationBar,
  ...cSeasonalDetails
});

export {
  settings,
  styles
};
