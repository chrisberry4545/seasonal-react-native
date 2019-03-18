import {
  settings
} from './settings';

import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

const gridPadding = 18;

export const oGrid: ViewStyle = {
  paddingTop: gridPadding,
  flexDirection: 'row',
  flex: 1,
  flexWrap: 'wrap'
};

export const oGridItem: ViewStyle = {
  width: '50%',
  aspectRatio: 1,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: settings.colors.greyMed,
  paddingBottom: gridPadding,
  marginBottom: gridPadding
};

export const oGridItemInner: ViewStyle = {
  flex: 1
};

export const oGridItemInnerEven: ViewStyle = {
  paddingRight: 10
};

export const oGridItemInnerOdd: ViewStyle = {
  paddingLeft: 10
};

export const oGridItemImage: ImageStyle = {
  flex: 1,
  borderRadius: 15
};

export const oGridItemText: ViewStyle = {
  marginTop: gridPadding
};
