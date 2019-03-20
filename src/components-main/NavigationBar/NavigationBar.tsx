import React, { SFC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  styles
} from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents, NavigationScreenProp } from 'react-navigation';

export const NavigationBar: SFC<{
  navigation: NavigationScreenProp<{}> | undefined
}> = ({ navigation }) => {
  return (
    <View style={ styles.cNavigationBar }>
      <NavigationEvents
        onDidFocus={() => navigation && navigation.closeDrawer()} />
      <TouchableOpacity
        style={ styles.cNavigationBarMenuButton }
        onPress={ navigation && navigation.openDrawer }>
        <Ionicons name='ios-menu' size={ 32 } />
      </TouchableOpacity>
      <Text style={ [styles.cHeadingLarge, styles.cNavigationBarHeading] }>
        Eat Seasonal
      </Text>
    </View>
  );
};
