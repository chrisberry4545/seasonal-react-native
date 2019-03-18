import {
  settings
} from './settings';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const cNavigationBar: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: settings.colors.greyMed,
  alignItems: 'center',
  flexDirection: 'row',
  paddingTop: 16,
  paddingBottom: 10
};

export const cNavigationBarMenuButton: ViewStyle = {
  flex: 0
};

export const cNavigationBarHeading: TextStyle = {
  flex: 1,
  textAlign: 'center'
};
