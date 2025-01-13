import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from '../../types/navigator.types';
import BottomTabNavigator from '../BottomTab/BottomTabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName="BottomTab">
      <RootStack.Screen
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: 'transparent'},
        }}
        name="BottomTab"
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
}
