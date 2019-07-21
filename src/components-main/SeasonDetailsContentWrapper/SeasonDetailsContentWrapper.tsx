import React, { FC } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import {
  HeaderConnecter
} from '../../components-main/Header/Header.connector';

import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';
import { MainContainer, CenteredLoadingSpinner } from '../../components-layout';
import { CurrentSeasonNameConnecter } from '../CurrentSeasonName/CurrentSeasonName.connector';

const styleSeasonalDetails: ViewStyle = {
  flex: 1
};

export const SeasonDetailsContentWrapper:
FC<ISeasonDetailsContentWrapperInputProps> = ({
  isLoading,
  children
}) => (
      <MainContainer>
        <HeaderConnecter />
        {
          !isLoading
            ? (
              <ScrollView style={ styleSeasonalDetails }>
                <CurrentSeasonNameConnecter />
                { children }
              </ScrollView>
            )
            : <CenteredLoadingSpinner />
        }
      </MainContainer>
);
