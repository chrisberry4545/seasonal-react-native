import {
  settings
} from './settings';
import { TextStyle } from 'react-native';

const textBase: TextStyle = {
  color: settings.colors.primaryText,
  fontFamily: settings.fonts.primary
};

export const cTextMed: TextStyle = {
  ...textBase,
  fontSize: 14,
  lineHeight: 14
};

export const cTextLarge: TextStyle = {
  ...textBase,
  fontSize: 16,
  lineHeight: 16
};
