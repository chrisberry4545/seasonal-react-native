import { Font } from 'expo';
import {
  settings
} from './../styles';

export const loadFonts = (): Promise<void> => Font.loadAsync({
  [settings.fonts.primary]: require('./../../assets/fonts/Roboto-Regular.ttf')
});
