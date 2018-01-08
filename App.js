'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import FBSDK, {LoginManager} from 'react-native-fbsdk';

export default class App extends Component<{}> {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if(result.isCancelled) {
        alert('login cancelled');
      }
      else {
        alert('login success: ' + result.grantPermissions);
      }
    }, function(error) {
        alert ('Error ' + error)
    }
  )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth}>
          <Text>
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Button: {
    padding: 30,
    margin: 20,
    fontSize: 25,
  },
});
