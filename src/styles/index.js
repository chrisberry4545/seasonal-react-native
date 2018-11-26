import { StyleSheet } from 'react-native';
import { oGrid } from './o-grid';
import { cHeadings } from './c-headings';
import { cText } from './c-text';
import { cSeasonalDetails } from './c-seasonal-details';

const styles = StyleSheet.create({
  ...oGrid,
  ...cHeadings,
  ...cText,
  ...cSeasonalDetails
});

export {
  styles
};
