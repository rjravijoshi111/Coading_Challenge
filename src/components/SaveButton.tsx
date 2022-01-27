import React from 'react';
import {StyleSheet, TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

const ButtonWithStatus = (props: { onPress: ((event: GestureResponderEvent) => void) | undefined; }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.btnText}>Save</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithStatus;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#01D167',
    paddingVertical: 15,
    borderRadius: 30,
  },
  btnText: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
