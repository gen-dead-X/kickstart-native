import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Animated, View, TouchableOpacity} from 'react-native';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: Readonly<BottomTabBarProps>) {
  return (
    <View className="absolute bottom-5 left-5 right-5 z-10 flex-row items-center justify-around rounded-full border-t border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-slate-800">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
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
          BottomHome: 'home',
          DemoA: 'settings',
          DemoB: 'person',
        }[route.name];

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex items-center justify-center p-2.5">
            <MaterialIcons
              name={iconName}
              size={30}
              color={isFocused ? '#673ab7' : '#9ca3af'}
            />
            <Animated.Text
              className={`mt-1 text-xs ${isFocused ? 'text-purple-700' : 'text-gray-400'} dark:${isFocused ? 'text-purple-400' : 'text-gray-400'}`}>
              {typeof label === 'string'
                ? label
                : label({
                    focused: isFocused,
                    color: isFocused ? '#673ab7' : '#9ca3af',
                    position: 'below-icon',
                    children: '',
                  })}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
