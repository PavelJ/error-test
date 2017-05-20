import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import Expo from 'expo';
import {
  Notifications,
} from 'expo';
import {
  FontAwesome,
} from '@expo/vector-icons';

import AppNavigator from './navigation/app-navigator'
import { addNavigationHelpers } from 'react-navigation';

@connect(state => ({
  navigation: state.navigation,
}))
export default class App extends React.Component {

  // in the future, logged in state will be handled here
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })} />
    );
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
