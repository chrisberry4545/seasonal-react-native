import {
  settings
} from './settings';

import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

const gridPadding = 18;

export const oGrid: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: gridPadding
};

export const oGridItem: ViewStyle = {
  aspectRatio: 1,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: settings.colors.greyMed,
  marginBottom: gridPadding,
  paddingBottom: gridPadding,
  width: '50%'
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
  borderRadius: 15,
  flex: 1
};

export const oGridItemText: ViewStyle = {
  marginTop: gridPadding
};
