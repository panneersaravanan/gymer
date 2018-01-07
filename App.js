'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Gymer
        </Text>
        <TextInput
          style={{height: 40, width: 100}}
          placeholder="Enter your ZIP"
        />
        <Button
          onPress={() => {}}
          title="Trainer"
          color="#48BBEC"
          style={styles.Button}
          />
          <Button
            onPress={() => {}}
            title="Trainee"
            color="#841584"
            style={styles.Button}
            />
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
