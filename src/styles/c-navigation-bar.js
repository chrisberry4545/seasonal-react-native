import {
  settings
} from './settings';
import { StyleSheet } from 'react-native';

const cNavigationBar = {
  cNavigationBar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: settings.colors.grey,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 10
  },
  cNavigationBarMenuButton: {
    flex: 0
  },
  cNavigationBarHeading: {
    flex: 1,
    textAlign: 'center'
  }
};

export {
  cNavigationBar
};
