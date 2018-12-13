import React from 'react';
import { View } from 'react-native';
import {
  styles
} from '../../styles';
import {
  getAllSeasonData
} from '../../services';
import {
  SeasonListView
} from './season-list-view';
import {
  SCREENS
} from './../../const';

import {
  NavigationBar
} from './../shared';

export class SeasonListScreen extends React.Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    drawerLabel: 'All Seasons'
  };
  state = {
    seasonData: null
  }
  async componentDidMount() {
    const seasonData = await getAllSeasonData();
    this.setState({
      seasonData
    });
  }
  render() {
    return (
      <View style={ styles.oMainContainer }>
        <NavigationBar
          navigation={ this.props.navigation } />
        <SeasonListView
          seasonData={ this.state.seasonData }
          onSeasonClicked={ (seasonIndex) => (
            this.props.navigation.navigate(
              SCREENS.SEASON_DETAILS,
              {
                seasonIndex
              }
            )
          )
        }
        />
      </View>
    );
  }
}
