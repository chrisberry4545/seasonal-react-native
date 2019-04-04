import React, { SFC } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import {
  styles
} from '../../styles';
import { NavigationEvents, NavigationScreenProp } from 'react-navigation';
import { BareButton, TextHeadingLarge, BurgerIcon } from '../../components-elements';

import {
  SearchBarConnecter
} from '../SearchBar/SearchBar.connector';

const styleNavigationBar: ViewStyle = {
  alignItems: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  flexDirection: 'row',
  paddingBottom: 10,
  paddingTop: 16
};

const styleNavigationBarMenuButton: ViewStyle = {
  flex: 0,
  paddingTop: 4
};

const styleNavigationBarHeading: TextStyle = {
  flex: 1,
  textAlign: 'center'
};

export const NavigationBar: SFC<{
  navigation: NavigationScreenProp<{}> | undefined
}> = ({ navigation }) => {
  return (
    <View style={ styleNavigationBar }>
      <NavigationEvents
        onDidFocus={() => navigation && navigation.closeDrawer()} />
      <BareButton
        style={ styleNavigationBarMenuButton }
        onClick={ navigation && navigation.openDrawer }>
        <BurgerIcon size={ 32 } />
      </BareButton>
      <TextHeadingLarge style={ styleNavigationBarHeading }>
        Eat Seasonal
      </TextHeadingLarge>
      <SearchBarConnecter />
    </View>
  );
};
