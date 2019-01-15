import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  getSeasonDataBySeasonIndex,
  getCurrentSeasonIndex
} from '../../services';
import {
  SeasonalDetailsView
} from './season-details-view';
import {
  styles
} from '../../styles';
import {
  loadFonts
} from '../../helpers';
import {
  NavigationBar
} from './../shared';

export class SeasonDetailsScreen extends React.Component {
  constructor() {
    super();
  }
  state = {
    firstLoadComplete: false,
    isLoading: false,
    season: null,
    seasonIndex: null
  }
  async componentDidMount() {
    await loadFonts();
    this.updateSeasonData();
  }
  componentDidUpdate() {
    const { navigation } = this.props;
    const seasonIndex =
      navigation.getParam('seasonIndex', getCurrentSeasonIndex());
    if (this.state.seasonIndex !== seasonIndex) {
      this.updateSeasonData(seasonIndex);
    }
  }
  async updateSeasonData(seasonIndex = getCurrentSeasonIndex()) {
    this.setState({
      isLoading: true,
      seasonIndex
    });
    const season = await getSeasonDataBySeasonIndex(seasonIndex);
    this.setState({
      firstLoadComplete: true,
      isLoading: false,
      season
    });
  }
  render() {
    return (
      <View style={ styles.oMainContainer }>
        {
          this.state.firstLoadComplete
            ? <NavigationBar navigation={ this.props.navigation } />
            : this.state.season && <ActivityIndicator size="large" style={ styles.cLoadingIndicator } />
        }
        {
          !this.state.isLoading && this.state.season
            ? <SeasonalDetailsView season={ this.state.season } />
            : <ActivityIndicator size="large" style={ styles.cLoadingIndicator } />
        }
      </View>
    );
  }
}
