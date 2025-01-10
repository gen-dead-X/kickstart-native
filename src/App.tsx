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
      <SafeAreaView className={'flex-1 dark:bg-stone-900 bg-white'}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme === 'dark' ? 'black' : 'white'}
        />

        <GestureHandlerRootView className="flex-1">
          <View
            className={`flex-1 flex justify-center items-center gap-14
          dark:bg-stone-900 bg-white
        `}>
            <View className="flex gap-5 items-center">
              <SectionHeader title="Zustand For State Management" />

              <Text
                className={`dark:text-sky-500 text-sky-300
          text-center font-bold text-4xl`}>
                🧸 Count: {bears}
              </Text>

              <View className="flex flex-row justify-center items-center gap-5">
                {/* Increase Bear Count Button */}
                <TouchableOpacity
                  className="bg-green-200 dark:bg-green-600 px-5 py-2 rounded-[2rem]"
                  onPress={increasePopulation}>
                  <Text className="text-center dark:text-white">Increase</Text>
                </TouchableOpacity>

                {/* Decrease Bear Count Button */}
                <TouchableOpacity
                  className="bg-red-200 dark:bg-red-600 px-5 py-2 rounded-[2rem]"
                  onPress={decreasePopulation}>
                  <Text className="text-center dark:text-white">Decrease</Text>
                </TouchableOpacity>

                {/* Remove All Bears Button */}
                <TouchableOpacity
                  className="bg-gray-200 dark:bg-gray-600 px-5 py-2 rounded-[2rem]"
                  onPress={removeAllBears}>
                  <Text className="text-center dark:text-white">Reset</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex gap-5 justify-center">
              <SectionHeader title="React Native Vector Icons" />
              <View className="flex flex-row gap-5 justify-center">
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
    <Text className="px-5 border-2 border-gray-300 py-2 font-bold bg-blue-200 rounded-lg dark:bg-blue-600 dark:text-white">
      🔵 {title} 🔵
    </Text>
  );
}

export default App;
