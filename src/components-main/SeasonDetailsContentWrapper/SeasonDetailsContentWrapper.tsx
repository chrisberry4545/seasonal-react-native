import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View, ViewStyle } from 'react-native';
import {
  getCurrentSeasonIndex
} from '../../services';
import {
  NavigationBar
} from '../../components-main/NavigationBar/NavigationBar';
import {
  CurrentSeasonNameConnecter
} from '../../components-main/CurrentSeasonName/CurrentSeasonName.connector';

import {
  ISeasonDetailsContentWrapperProps
} from './SeasonDetailsContentWrapper.interface';
import { MainContainer } from '../../components-layout';

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

export class SeasonDetailsContentWrapper
extends Component<ISeasonDetailsContentWrapperProps> {
  constructor(props: ISeasonDetailsContentWrapperProps) {
    super(props);
  }

  public async componentDidMount() {
    const { navigation } = this.props;
    const parentNavigator = navigation && navigation.dangerouslyGetParent();
    const seasonIndex = parentNavigator &&
      parentNavigator.getParam('seasonIndex', getCurrentSeasonIndex());
    this.props.onInit(seasonIndex);
  }

  public render() {
    return (
      <MainContainer>
        <NavigationBar navigation={ this.props.navigation } />
        {
          !this.props.isLoading
            ? (
              <ScrollView style={ styleSeasonalDetails }>
                <CurrentSeasonNameConnecter />
                <View style={ styleSeasonalDetailsSection }>
                  <View style={ styleSeasonalDetailsSectionInner }>
                    { this.props.children }
                  </View>
                </View>
              </ScrollView>
            )
            : <ActivityIndicator
                size='large'
                style={ styleSeasonDetailsContentWrapperLoadingIndicator } />
        }
      </MainContainer>
    );
  }
}
