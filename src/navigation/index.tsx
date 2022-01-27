import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SpedingLimitScreen from '../screens/SpedingLimitScreen/SpedingLimitScreen';

const RootStack = createStackNavigator();

const Navigator = () => {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };

  return (
    <RootStack.Navigator
      screenOptions={TransitionScreenOptions}
      headerMode="none"
      defaultScreenOptions={{
        headerShown: false
      }}
      initialRouteName="TabNavigator">
      <RootStack.Screen name="TabNavigator" component={TabNavigator} />
      <RootStack.Screen name="SpedingLimitScreen" component={SpedingLimitScreen} />
    </RootStack.Navigator>
  );
};
export default Navigator;
