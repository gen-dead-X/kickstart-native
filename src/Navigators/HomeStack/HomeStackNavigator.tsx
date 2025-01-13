import React from 'react';
import {HomeStackParamList} from '../../types/navigator.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home/Home';
import NavigationDemo from '../../Screens/NavigationDemo/NavigationDemo';
import {Appearance} from 'react-native';
import {useStore} from '../../store/store';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  const theme = useStore(state => state.theme);

  function getTheme() {
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
        contentStyle: {
          backgroundColor: getTheme() === 'dark' ? '#111827' : 'white',
        },
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
