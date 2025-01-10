/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Animated, View, StyleSheet} from 'react-native';

/* Module Imports */
import BottomTabDemoScreenA from '../../Screens/BottomTabDemo/BottomTabDemoScreenA';
import BottomTabDemoScreenB from '../../Screens/BottomTabDemo/BottomTabDemoScreenB';
import HomeStackNavigator from '../HomeStack/HomeStackNavigator';

const Tab = createBottomTabNavigator();

function MyTabBar({
  state,
  descriptors,
  navigation,
}: Readonly<BottomTabBarProps>) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          (options.tabBarLabel ?? options.title !== undefined)
            ? (options.title as string)
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconName = {
          Home: 'home',
          Settings: 'settings',
          Profile: 'person',
        }[route.name];

        return (
          <Animated.View key={index} style={styles.tabItem}>
            <MaterialIcons
              name={iconName}
              size={isFocused ? 30 : 25}
              color={isFocused ? '#673ab7' : '#222'}
              onPress={onPress}
              onLongPress={onLongPress}
            />
            <Animated.Text style={{color: isFocused ? '#673ab7' : '#222'}}>
              {typeof label === 'string'
                ? label
                : label({
                    focused: isFocused,
                    color: isFocused ? '#673ab7' : '#222',
                    position: 'below-icon',
                    children: '',
                  })}
            </Animated.Text>
          </Animated.View>
        );
      })}
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={MyTabBar}
      screenOptions={{
        animation: 'shift',
      }}
      initialRouteName="BottomHome">
      <Tab.Screen
        name="BottomHome"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          headerShown: false,
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen name="DemoA" component={BottomTabDemoScreenA} />
      <Tab.Screen name="DemoB" component={BottomTabDemoScreenB} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
