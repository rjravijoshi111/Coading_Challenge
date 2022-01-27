import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DebitCardScreen from '../screens/DebitCardScreen/DebitCardScreen';
import CreditScreen from '../screens/CreditScreen/CreditScreen';
import PaymentsScreen from '../screens/PaymentsScreen/PaymentsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import _TabBar from '../components/Tabbar';

const Tab = createBottomTabNavigator();

export default function _TabNavigator(props) {
  return (
    <Tab.Navigator
      tabBar={(props) => <_TabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'DebitCardScreen'}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DebitCardScreen" component={DebitCardScreen} />
      <Tab.Screen name="CreditScreen" component={CreditScreen} />
      <Tab.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
