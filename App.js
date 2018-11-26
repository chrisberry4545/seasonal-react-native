import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  getCurrentSeasonData
} from './src/services';
import {
  SeasonalDetails
} from './src/views';

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
    season: null
  }
  render() {
    return (
      <View style={ styles.container }>
        {
          this.state.season && <SeasonalDetails season={this.state.season} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
});
