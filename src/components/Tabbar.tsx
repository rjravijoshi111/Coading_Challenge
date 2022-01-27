import React, {useState} from 'react';
import {
  Keyboard,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {appImages} from '../styles/appImages';
import {LIGHT_GREEN, WHITE, TAB_TEXT_COLOR} from '../styles';
import Lang from '../localization';

const {width} = Dimensions.get('window');
const TabBar = () => {
  const [index, setIndex] = useState(1);
  const navigation = useNavigation();
  const onPressTab = (
    navigateTo:
      | string
      | {key: string; params?: undefined; merge?: boolean | undefined}
      | {
          name: never;
          key?: string | undefined;
          params: never;
          merge?: boolean | undefined;
        },
  ) => {
    navigation.navigate(navigateTo);
  };
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        style={styles.tabDesign}
        onPress={() => onPressTab('HomeScreen')}>
        <Image
          source={index == 0 ? appImages.home : appImages.home}
          style={styles.tabImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: index == 0 ? LIGHT_GREEN : TAB_TEXT_COLOR,
            },
          ]}>
          {Lang.tabBar.home}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabDesign}
        onPress={() => onPressTab('DebitCardScreen')}>
        <Image
          source={
            index == 1 ? appImages.selected_debit : appImages.selected_debit
          }
          style={styles.tabImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: index == 1 ? LIGHT_GREEN : TAB_TEXT_COLOR,
            },
          ]}>
          {Lang.tabBar.debit}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabDesign}
        onPress={() => onPressTab('PaymentsScreen')}>
        <Image
          source={index == 2 ? appImages.payments : appImages.payments}
          style={styles.tabImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: index == 2 ? LIGHT_GREEN : TAB_TEXT_COLOR,
            },
          ]}>
          {Lang.tabBar.payments}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabDesign}
        onPress={() => onPressTab('CreditScreen')}>
        <Image
          source={index == 3 ? appImages.credit : appImages.credit}
          style={styles.tabImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: index == 3 ? LIGHT_GREEN : TAB_TEXT_COLOR,
            },
          ]}>
          {Lang.tabBar.credit}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabDesign}
        onPress={() => {
          onPressTab('ProfileScreen');
        }}>
        <Image
          source={index == 4 ? appImages.profile : appImages.profile}
          style={styles.tabImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tabText,
            {
              color: index == 4 ? LIGHT_GREEN : TAB_TEXT_COLOR,
            },
          ]}>
          {Lang.tabBar.profile}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabText: {
    color: TAB_TEXT_COLOR,
    fontSize: 12,
    marginTop: 5,
  },
  tabImage: {
    height: 20,
    width: 20,
  },
  tabDesign: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    flex: 1,
    justifyContent: 'center',
  },
  backGroundImageStyle: {
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    backgroundColor: WHITE,
    height: width * 0.24,
  },
  tabBarContainer: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
