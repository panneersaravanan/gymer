import React from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const mike = require('../images/mike.jpeg');
const peter = require('../images/peter.jpg');
const shawn = require('../images/shawn.jpeg');
const tim = require('../images/tim.jpeg');

const styles = StyleSheet.create({
  image: {
    width,
    height: Math.floor(height * 0.3),
    justifyContent: 'flex-end',
  },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    padding: 5,
    backgroundColor: 'transparent',
  },
});


const imageAndText = (imageSource, text, navigation) => (
  <TouchableOpacity onPress={() => navigation.navigate('Trainer', { name: text })}>
    <Image source={imageSource} style={styles.image}>
    </Image>
  </TouchableOpacity>
  );

const TrainerList = ({ navigation }) => (
  <ScrollView>
    {imageAndText(mike, 'Mike', navigation)}
    {imageAndText(peter, 'Peter', navigation)}
    {imageAndText(shawn, 'Shawn', navigation)}
    {imageAndText(tim, 'Tim', navigation)}
  </ScrollView>
);

export default TrainerList;
