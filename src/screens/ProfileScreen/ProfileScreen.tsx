import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{"Profile Screen"}</Text>
    </View>
  );
}

export default ProfileScreen;
