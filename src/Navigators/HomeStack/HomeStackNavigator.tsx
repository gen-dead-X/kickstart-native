import React from 'react';
import {HomeStackParamList} from '../../types/navigator.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home/Home';
import NavigationDemo from '../../Screens/NavigationDemo/NavigationDemo';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        options={{
          title: 'Demo Stack Navigation',
        }}
        name="DemoNavigation"
        component={NavigationDemo}
      />
    </HomeStack.Navigator>
  );
}
