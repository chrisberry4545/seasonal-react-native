import React from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import {
  getCurrentSeasonData
} from './src/services';
import {
  SeasonalDetails
} from './src/views';
import {
  styles
} from './src/styles';
import {
  loadFonts
} from './src/helpers';

export default class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    season: null
  }
  async componentWillMount() {
    const [ season ] = await Promise.all([getCurrentSeasonData(), loadFonts()]);
    this.setState({
      season
    });
  }
  render() {
    return (
      !this.state.season
      ? (
        <AppLoading/>
      ) : (
        <View style={ styles.oMainContainer }>
          <SeasonalDetails season={ this.state.season } />
        </View>
      )
    );
  }
}
