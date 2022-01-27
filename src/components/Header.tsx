import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DARK_GREY, WHITE} from '../styles';
import {appImages} from '../styles/appImages';
const Header = ({
  isShowBack = false,
  onBackPress,
  selectedAnswer = '',
  onSelect = () => {},
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.container,{
        marginTop: insets.top,
      }]}>
      {isShowBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={appImages.back}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}></View>
      <Image
        source={appImages.upLogo}
        style={styles.appIconStyle}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle:{
    height: 25, width: 25, resizeMode: 'contain'
  },
  appIconStyle:{
    height: 30, width: 30, resizeMode: 'contain'
  }
});
