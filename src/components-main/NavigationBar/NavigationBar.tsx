import React, { SFC } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import {
  styles
} from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents, NavigationScreenProp } from 'react-navigation';
import { BareButton, TextHeadingLarge } from '../../components-elements';

const styleNavigationBar: ViewStyle = {
  alignItems: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  flexDirection: 'row',
  paddingBottom: 10,
  paddingTop: 16
};

const styleNavigationBarMenuButton: ViewStyle = {
  flex: 0
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
        onPress={ navigation && navigation.openDrawer }>
        <Ionicons name='ios-menu' size={ 32 } />
      </BareButton>
      <TextHeadingLarge style={ styleNavigationBarHeading }>
        Eat Seasonal
      </TextHeadingLarge>
    </View>
  );
};
