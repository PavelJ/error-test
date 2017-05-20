import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,   
} from 'react-native';
import {
  FontAwesome,
} from '@expo/vector-icons';

import cacheAssetsAsync from './shared/utils/cache-assets-async';
import App from './app'
import Store from './store'

class AppContainer extends React.Component {
  state = {
    appIsReady: false
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
          require('./assets/images/loading.gif')
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <Provider store={Store}>
            <App /> 
        </Provider>
      );
    } else {
      return (
        <Expo.AppLoading />
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
Expo.registerRootComponent(AppContainer);
