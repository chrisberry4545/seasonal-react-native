import React, { FC } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import {
  HeaderConnecter
} from '../../components-main/Header/Header.connector';
import {
  CurrentSeasonNameConnecter
} from '../../components-main/CurrentSeasonName/CurrentSeasonName.connector';

import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';
import { MainContainer } from '../../components-layout';
import { LoadingSpinner } from '../../components-elements';

const styleSeasonalDetails: ViewStyle = {
  flex: 1
};

const styleSeasonalDetailsSection: ViewStyle = {
  flex: 1,
  marginBottom: 0
};

const styleSeasonalDetailsSectionInner: ViewStyle = {
  flex: 1
};

const styleSeasonDetailsContentWrapperLoadingIndicator: ViewStyle = {
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
                <View style={ styleSeasonalDetailsSection }>
                  <View style={ styleSeasonalDetailsSectionInner }>
                    { children }
                  </View>
                </View>
              </ScrollView>
            )
            : <LoadingSpinner
                style={ styleSeasonDetailsContentWrapperLoadingIndicator } />
        }
      </MainContainer>
);
