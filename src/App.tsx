/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
  require('../ReactotronConfig.js');
}

import '../global.css';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {StoreState, useStore} from './store/store';
import config from './config/config';
import ThemeToggler from './ui/ThemeToggler/ThemeToggler';
import useThemeHandler from './hooks/useThemeHandler';
import AppProvider from './Providers/AppProvider';

function App(): React.JSX.Element {
  const {theme} = useThemeHandler();

  /* Import State Hooks */
  const bears = useStore((state: StoreState) => state.bears);
  const increasePopulation = useStore(
    (state: StoreState) => state.increasePopulation,
  );
  const decreasePopulation = useStore(
    (state: StoreState) => state.decreasePopulation,
  );
  const removeAllBears = useStore((state: StoreState) => state.removeAllBears);

  return (
    <AppProvider>
      <SafeAreaView className={'flex-1 bg-white dark:bg-stone-900'}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme === 'dark' ? 'black' : 'white'}
        />

        <GestureHandlerRootView className="flex-1">
          <View
            className={
              'flex flex-1 items-center justify-center gap-14 bg-white dark:bg-stone-900'
            }>
            <View className="flex items-center gap-5">
              <SectionHeader title="Zustand For State Management" />

              <Text
                className={`text-center text-4xl font-bold text-sky-300 dark:text-sky-500`}>
                🧸 Count: {bears}
              </Text>

              <View className="flex flex-row items-center justify-center gap-5">
                {/* Increase Bear Count Button */}
                <TouchableOpacity
                  className="rounded-[2rem] bg-green-200 px-5 py-2 dark:bg-green-600"
                  onPress={increasePopulation}>
                  <Text className="text-center dark:text-white">Increase</Text>
                </TouchableOpacity>

                {/* Decrease Bear Count Button */}
                <TouchableOpacity
                  className="rounded-[2rem] bg-red-200 px-5 py-2 dark:bg-red-600"
                  onPress={decreasePopulation}>
                  <Text className="text-center dark:text-white">Decrease</Text>
                </TouchableOpacity>

                {/* Remove All Bears Button */}
                <TouchableOpacity
                  className="rounded-[2rem] bg-gray-200 px-5 py-2 dark:bg-gray-600"
                  onPress={removeAllBears}>
                  <Text className="text-center dark:text-white">Reset</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex justify-center gap-5">
              <SectionHeader title="React Native Vector Icons" />
              <View className="flex flex-row justify-center gap-5">
                <MaterialIcons name="rocket-launch" size={40} color="purple" />
                <MaterialIcons name="rocket-launch" size={40} color="red" />
                <MaterialIcons name="rocket-launch" size={40} color="orange" />
              </View>
            </View>

            <View className="flex gap-5">
              <SectionHeader title="React Native Paper" />
              <View className="h-8">
                <TextInput
                  label={'API URL'}
                  className="px-5 py-2"
                  defaultValue={config.API_URL}
                />
              </View>
            </View>

            <ThemeToggler />
          </View>
        </GestureHandlerRootView>
      </SafeAreaView>
    </AppProvider>
  );
}

function SectionHeader({title}: Readonly<{title: string}>): React.JSX.Element {
  return (
    <Text className="rounded-lg border-2 border-gray-300 bg-blue-200 px-5 py-2 font-bold dark:bg-blue-600 dark:text-white">
      🔵 {title} 🔵
    </Text>
  );
}

export default App;
