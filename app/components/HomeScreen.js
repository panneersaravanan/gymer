import React from 'react';
import { StyleSheet, View } from 'react-native';
import TrainerList from './TrainerList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TrainerList navigation={navigation} />
  </View>
  );

export default HomeScreen;
