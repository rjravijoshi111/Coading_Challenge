import {View, StyleSheet, Text} from 'react-native';
import {
  DARK_GREY,
  FONTS,
} from '../../styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: FONTS.fontFamily_bold,
    fontSize: FONTS.fontSize_20,
    color: DARK_GREY
  }
});

export default styles;
