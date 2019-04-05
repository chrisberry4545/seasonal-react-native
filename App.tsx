import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import {
  loadFonts
} from './src/helpers';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { AppContainer } from './src/components-app';

interface IAppState {
  fontsLoaded: boolean;
}

export default class App extends Component<{}, IAppState> {
  public async componentDidMount() {
    await loadFonts();
    this.setState({
      fontsLoaded: true
    });
  }

  public render() {
    if (!this.state || !this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
