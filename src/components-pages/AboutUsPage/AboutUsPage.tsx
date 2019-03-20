import React, { SFC } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { Linking, Text, TouchableOpacity, View } from 'react-native';

import {
  styles
} from '../../styles';

import {
  NavigationBar
} from '../../components-main';

import {
  PRIVACY_POLICY_URL
} from '../../config';

const linkToPrivacyPolicy = (): void => {
  Linking.canOpenURL(PRIVACY_POLICY_URL).then((supported) => {
    if (supported) {
      Linking.openURL(PRIVACY_POLICY_URL);
    }
  });
};

export const AboutUsPage: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
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
