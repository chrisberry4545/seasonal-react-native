import React, { FC } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import {
  HeaderConnecter
} from '../../components-main/Header/Header.connector';

import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';
import { MainContainer, TopLoadingSpinner } from '../../components-layout';

const styleSeasonalDetailsContentWrapper: ViewStyle = {
  flex: 1
};

export const SeasonDetailsContentWrapper:
FC<ISeasonDetailsContentWrapperInputProps> = ({
  isLoading,
  children
}) => (
      <MainContainer>
        <HeaderConnecter />
        <ScrollView style={ styleSeasonalDetailsContentWrapper }>
          {
            !isLoading
              ? children
              : <TopLoadingSpinner />
          }
        </ScrollView>
      </MainContainer>
);
