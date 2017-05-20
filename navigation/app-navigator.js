import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

//specific screens
import LoginScreen from '../screens/login-screen/login-screen';

import { StackNavigator } from 'react-navigation';

// Main top-level navigator - login and registration are just blank pages, main contains all the others
const MainNavigator = StackNavigator({
    login: {
      screen: LoginScreen
    }
},
{
    initialRouteName: 'login',
    headerMode: 'none'
});

export default MainNavigator;