import { Font } from 'expo';
import {
  settings,
} from './../styles';

const loadFonts = () => Font.loadAsync({
  [settings.fonts.primary]: require('./../../assets/fonts/Roboto-Regular.ttf')
});

module.exports = {
  loadFonts
};
