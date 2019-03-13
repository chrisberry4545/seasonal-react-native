import React from 'react';

import { Linking, Text, TouchableOpacity, View } from 'react-native';

import {
  styles
} from '../../styles';

import {
  NavigationBar
} from '../shared'

import {
  PRIVACY_POLICY_URL
} from '../../config';

const linkToPrivacyPolicy = () => {
  Linking.canOpenURL(PRIVACY_POLICY_URL).then((supported) => {
    if (supported) {
      Linking.openURL(PRIVACY_POLICY_URL);
    }
  });
};

export const AboutUsScreen = ({ navigation }) => (
  <View style={ styles.oMainContainer }>
    <NavigationBar navigation={ navigation } />
    <TouchableOpacity
      style={ [styles.cAboutUsLink] }
      onPress={linkToPrivacyPolicy}>
      <Text style={ [styles.cHeadingMed, styles.cAboutUsLinkText] }>
        Privacy Policy
      </Text>
    </TouchableOpacity>
  </View>
);
