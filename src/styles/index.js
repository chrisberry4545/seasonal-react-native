import { settings } from './settings';
import { StyleSheet } from 'react-native';
import { oMainContainer } from './o-main-container';
import { oGrid } from './o-grid';
import { cHeadings } from './c-headings';
import { cText } from './c-text';
import { cNavigationBar } from './c-navigation-bar';
import { cSeasonalDetails } from './c-seasonal-details';
import { cSeasonalList } from './c-seasonal-list';

const styles = StyleSheet.create({
  ...oMainContainer,
  ...oGrid,
  ...cHeadings,
  ...cText,
  ...cNavigationBar,
  ...cSeasonalDetails,
  ...cSeasonalList
});

export {
  settings,
  styles
};
