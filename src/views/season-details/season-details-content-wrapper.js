import React from 'react';
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

export class SeasonDetailsContentWrapper extends React.Component {
  constructor() {
    super();
  }
  state = {
    isLoading: false,
    season: null,
    seasonIndex: null
  }
  async componentDidMount() {
    this.checkForUpdates();
  }
  componentDidUpdate() {
    this.checkForUpdates();
  }
  checkForUpdates() {
    const { navigation } = this.props;
    const parentNavigator = navigation.dangerouslyGetParent();
    const seasonIndex = parentNavigator &&
      parentNavigator.getParam('seasonIndex', getCurrentSeasonIndex());
    if (this.state.seasonIndex !== seasonIndex) {
      this.updateSeasonData(seasonIndex);
    }
  }
  async updateSeasonData(seasonIndex) {
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
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { season: this.state.season })
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
            : <ActivityIndicator size="large" style={ styles.cLoadingIndicator } />
        }
      </View>
    );
  }
}
