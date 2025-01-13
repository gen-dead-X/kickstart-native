import React from 'react';
import {HomeStackParamList} from '../../types/navigator.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home/Home';
import NavigationDemo from '../../Screens/NavigationDemo/NavigationDemo';
import {useMMKV} from 'react-native-mmkv';
import {Appearance} from 'react-native';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  const storage = useMMKV();

  function getTheme() {
    const theme = storage.getString('theme');

    if (theme === 'system') {
      const systemTheme = Appearance.getColorScheme();
      return systemTheme ?? 'light';
    }
    if (theme === 'dark') {
      return 'dark';
    }
    return 'light';
  }

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: getTheme() === 'dark' ? 'white' : 'black',
      }}>
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
