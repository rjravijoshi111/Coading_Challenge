import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LIGHT_GREEN, WHITE, FONTS} from '../styles';

const DollarSign = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>$$</Text>
    </View>
  );
};

export default DollarSign;

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: LIGHT_GREEN,
  },
  title: {
    fontFamily: FONTS.fontFamily_regular,
    fontSize: FONTS.fontSize_12,
    color: WHITE
  },
});
