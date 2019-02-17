import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  styles
} from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

export const NavigationBar = ({ navigation }) => {
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
