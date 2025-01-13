import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/* Module Imports */
import BottomTabDemoScreenA from '../../Screens/BottomTabDemo/BottomTabDemoScreenA';
import BottomTabDemoScreenB from '../../Screens/BottomTabDemo/BottomTabDemoScreenB';
import HomeStackNavigator from '../HomeStack/HomeStackNavigator';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={BottomTabBar}
      screenOptions={{
        animation: 'shift',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
        },
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName="BottomHome">
      <Tab.Screen
        name="BottomHome"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen name="DemoA" component={BottomTabDemoScreenA} />
      <Tab.Screen name="DemoB" component={BottomTabDemoScreenB} />
    </Tab.Navigator>
  );
}
