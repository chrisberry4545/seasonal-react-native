import { StyleProp, TextStyle } from 'react-native';

export interface IButton {
  activeOpacity?: number;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}
