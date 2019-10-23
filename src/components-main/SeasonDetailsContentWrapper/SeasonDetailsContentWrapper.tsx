import React, { FC, Fragment } from 'react';
import { ScrollView, ViewStyle, TextStyle } from 'react-native';
import {
  HeaderConnecter
} from '../../components-main/Header/Header.connector';

import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';
import { MainContainer, TopLoadingSpinner } from '../../components-layout';
import { TextHeadingSmall } from '../../components-elements';

const styleSeasonDetaolsContentWarapper: TextStyle = {
  marginBottom: 12,
  marginTop: 12,
  textAlign: 'center',
  width: '100%'
};

const styleSeasonalDetailsContentWrapper: ViewStyle = {
  flex: 1
};

export const SeasonDetailsContentWrapper:
FC<ISeasonDetailsContentWrapperInputProps> = ({
  isLoading,
  currentSeasonName,
  children
}) => (
      <MainContainer>
        <HeaderConnecter />
        <ScrollView style={ styleSeasonalDetailsContentWrapper }>
          {
            !isLoading
              ? <Fragment>
                <TextHeadingSmall style={styleSeasonDetaolsContentWarapper}>
                  {currentSeasonName}
                </TextHeadingSmall>
                {children}
              </Fragment>
              : <TopLoadingSpinner />
          }
        </ScrollView>
      </MainContainer>
);
