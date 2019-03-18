import React, { Component, Children, ReactElement } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import {
  getSeasonDataBySeasonIndex,
  getCurrentSeasonIndex
} from '../../services';
import {
  styles
} from '../../styles';
import {
  NavigationBar
} from './../shared';
import { NavigationScreenProp } from 'react-navigation';

interface ISeasonalDetailsContentWrapperInterface {
  navigation: NavigationScreenProp<{}>;
}

export class SeasonDetailsContentWrapper
extends Component<ISeasonalDetailsContentWrapperInterface> {
  public state = {
    isLoading: false,
    season: null,
    seasonIndex: null
  };

  constructor(props: ISeasonalDetailsContentWrapperInterface) {
    super(props);
  }

  public async componentDidMount() {
    const { navigation } = this.props;
    const parentNavigator = navigation.dangerouslyGetParent();
    const seasonIndex = parentNavigator &&
      parentNavigator.getParam('seasonIndex', getCurrentSeasonIndex());
    this.updateSeasonData(seasonIndex);
  }

  public async updateSeasonData(seasonIndex: number) {
    this.setState({
      isLoading: true,
      seasonIndex
    });
    const season = await getSeasonDataBySeasonIndex(seasonIndex);
    this.setState({
      isLoading: false,
      season
    });
  }

  public render() {
    const childrenWithProps = Children.map(this.props.children, (child) =>
      React.cloneElement(child as ReactElement, { season: this.state.season })
    );
    return (
      <View style={ styles.oMainContainer }>
        <NavigationBar navigation={ this.props.navigation } />
        {
          !this.state.isLoading && this.state.season
            ? (
              <ScrollView style={ styles.cSeasonalDetails }>
                <View style={ styles.cSeasonalDetailsSection }>
                  <View style={ styles.cSeasonalDetailsSectionInner }>
                    { childrenWithProps }
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
