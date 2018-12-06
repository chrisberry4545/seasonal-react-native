import {
  settings
} from './settings';

import { StyleSheet } from 'react-native';

const gridPadding = 18;

const oGrid = {
  oGrid: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: settings.colors.grey,
    paddingTop: gridPadding,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  oGridItem: {
    width: '50%',
    aspectRatio: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: settings.colors.grey,
    paddingBottom: gridPadding,
    marginBottom: gridPadding
  },
  oGridItemInner: {
    flex: 1
  },
  oGridItemInnerEven: {
    paddingRight: 10
  },
  oGridItemInnerOdd: {
    paddingLeft: 10
  },
  oGridItemImage: {
    flex: 1,
    borderRadius: 15
  },
  oGridItemText: {
    marginTop: gridPadding
  },
};

export {
  oGrid
};
