import { StyleSheet } from 'react-native';
import { oGrid } from './o-grid';
import { cHeadings } from './c-headings';
import { cText } from './c-text';

const styles = StyleSheet.create({
  ...oGrid,
  ...cHeadings,
  ...cText,
});

export {
  styles
};
