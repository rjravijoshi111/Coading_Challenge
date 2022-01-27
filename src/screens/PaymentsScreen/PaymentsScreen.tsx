import React, {useState} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

function PaymentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{"Payments Screen"}</Text>
    </View>
  );
}

export default PaymentsScreen;
