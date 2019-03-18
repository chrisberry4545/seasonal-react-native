import React, { SFC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  styles
} from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents, NavigationScreenProp } from 'react-navigation';

export const NavigationBar: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => {
  return (
    <View style={ styles.cNavigationBar }>
      <NavigationEvents
        onDidFocus={() => navigation.closeDrawer()} />
      <TouchableOpacity
        style={ styles.cNavigationBarMenuButton }
        onPress={ navigation.openDrawer }>
        <Ionicons name="ios-menu" size={ 32 } />
      </TouchableOpacity>
      <Text style={ [styles.cHeadingLarge, styles.cNavigationBarHeading] }>
        Eat Seasonal
      </Text>
    </View>
  );
}
