import {
  settings
} from './settings';
import { TextStyle } from 'react-native';

export const cHeadingLarge: TextStyle = {
  fontSize: 30,
  lineHeight: 40,
  fontFamily: settings.fonts.primary
};

export const cHeadingMed: TextStyle = {
  color: settings.colors.primaryText,
  fontSize: 20,
  lineHeight: 40,
  fontFamily: settings.fonts.primary
};
