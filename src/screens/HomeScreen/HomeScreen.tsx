import React, {useState} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>{"Home Screen"}</Text>
    </View>
  );
}

export default HomeScreen;
