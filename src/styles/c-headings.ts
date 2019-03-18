import {
  settings
} from './settings';
import { TextStyle } from 'react-native';

export const cHeadingLarge: TextStyle = {
  fontFamily: settings.fonts.primary,
  fontSize: 30,
  lineHeight: 40
};

export const cHeadingMed: TextStyle = {
  color: settings.colors.primaryText,
  fontFamily: settings.fonts.primary,
  fontSize: 20,
  lineHeight: 40
};
