import React, { SFC } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { Linking, TextStyle } from 'react-native';

import {
  NavigationBar
} from '../../components-main';

import {
  PRIVACY_POLICY_URL
} from '../../config';
import { TextHeadingMedium, BareButton } from '../../components-elements';
import { MainContainer } from '../../components-layout';

const styleAboutUsLink: TextStyle = {
  flex: 1,
  marginTop: 10,
  textAlign: 'center'
};

const styleAboutUsLinkText: TextStyle = {
  flex: 1,
  textAlign: 'center'
};

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
  <MainContainer>
    <NavigationBar navigation={ navigation } />
    <BareButton
      style={ styleAboutUsLink }
      onPress={linkToPrivacyPolicy}>
      <TextHeadingMedium style={ styleAboutUsLinkText }>
        Privacy Policy
      </TextHeadingMedium>
    </BareButton>
  </MainContainer>
);
