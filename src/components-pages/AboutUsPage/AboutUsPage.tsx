import React, { SFC } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import {
  AboutUs,
  NavigationBar,
  PrivacyPolicyLink
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const AboutUsPage: SFC<{
  navigation: NavigationScreenProp<{}>
}> = ({ navigation }) => (
  <MainContainer>
    <NavigationBar navigation={ navigation } />
    <AboutUs />
    <PrivacyPolicyLink />
  </MainContainer>
);
