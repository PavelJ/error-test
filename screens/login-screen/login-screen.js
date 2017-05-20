//These to imports are needed because of problem with field-level validations:
//https://github.com/erikras/redux-form/issues/2381
import 'core-js/es6/symbol';
import 'core-js/es6/array';
import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

@connect()
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login screen',
    header: {
      right: <Button title="Info" onPress={ () => {} } />
    }
  };

  constructor(props){
      super(props);
  }

  componentWillUpdate(nextProps, nextState) {
  }

  render() {
    return (
      <Text>Test - login screen</Text>
    )
  }
}
