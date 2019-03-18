import {
  settings
} from './settings';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const cNavigationBar: ViewStyle = {
  alignItems: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: settings.colors.greyMed,
  flexDirection: 'row',
  paddingBottom: 10,
  paddingTop: 16
};

export const cNavigationBarMenuButton: ViewStyle = {
  flex: 0
};

export const cNavigationBarHeading: TextStyle = {
  flex: 1,
  textAlign: 'center'
};
