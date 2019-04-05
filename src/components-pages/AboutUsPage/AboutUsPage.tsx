import React, { SFC } from 'react';

import {
  AboutUs,
  HeaderConnecter,
  PrivacyPolicyLink
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const AboutUsPage: SFC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <AboutUs />
    <PrivacyPolicyLink />
  </MainContainer>
);
