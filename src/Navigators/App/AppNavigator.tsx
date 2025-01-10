import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from '../../types/navigator.types';
import BottomTabNavigator from '../BottomTab/BottomTabNavigator';
import storage from '../../storage/storage';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const theme = storage.getString('theme');

  return (
    <RootStack.Navigator initialRouteName="BottomTab">
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
}
