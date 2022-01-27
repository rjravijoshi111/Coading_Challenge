import {View, StyleSheet, Text} from 'react-native';
import {DARK_GREY, GRAY_TEXT, WINDOW_WIDTH, FONTS} from '../../styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: FONTS.fontFamily_bold,
    fontSize: FONTS.fontSize_13,
    color: DARK_GREY,
    borderWidth: 1,
    width: WINDOW_WIDTH * 0.9,
  },
  headingText: {
    fontFamily: FONTS.fontFamily_bold,
    fontSize: FONTS.fontSize_15,
    color: GRAY_TEXT,
    textAlign: 'center',
    width: WINDOW_WIDTH * 0.9,
  },
});

export default styles;
