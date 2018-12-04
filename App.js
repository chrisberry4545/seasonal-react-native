import React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import {
  getCurrentSeasonData
} from './src/services';
import {
  SeasonalDetails
} from './src/views';
import {
  settings,
  styles
} from './src/styles';

export default class App extends React.Component {
  constructor() {
    getCurrentSeasonData().then((season) => {
      this.setState({
        season
      })
    }, (err) => {
      console.log('got err', err);
    });
    super();
  }
  state = {
    fontLoaded: false,
    season: null
  }
  async componentDidMount() {
    await Font.loadAsync({
      [settings.fonts.primary]:
        require('./assets/fonts/Roboto-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }
  render() {
    return (
      <View style={ styles.oMainContainer }>
        {
          this.state.season && this.state.fontLoaded &&
            <SeasonalDetails season={this.state.season} />
        }
      </View>
    );
  }
}
