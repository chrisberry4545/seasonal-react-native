import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import {
  getCurrentSeasonIndex
} from '../../services';
import {
  styles
} from '../../styles';
import {
  NavigationBar
} from '../../components-main/NavigationBar/NavigationBar';
import {
  CurrentSeasonNameConnecter
} from '../../components-main/CurrentSeasonName/CurrentSeasonName.connector';

import {
  ISeasonDetailsContentWrapperProps
} from './SeasonDetailsContentWrapper.interface';

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
      <View style={ styles.oMainContainer }>
        <NavigationBar navigation={ this.props.navigation } />
        {
          !this.props.isLoading
            ? (
              <ScrollView style={ styles.cSeasonalDetails }>
                <CurrentSeasonNameConnecter />
                <View style={ styles.cSeasonalDetailsSection }>
                  <View style={ styles.cSeasonalDetailsSectionInner }>
                    { this.props.children }
                  </View>
                </View>
              </ScrollView>
            )
            : <ActivityIndicator
                size='large'
                style={ styles.cLoadingIndicator } />
        }
      </View>
    );
  }
}
