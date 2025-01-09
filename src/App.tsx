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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {StoreState, useStore} from './store/store';
import config from './config/config';
import ThemeToggler from './ui/ThemeToggler/ThemeToggler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import useThemeHandler from './hooks/useThemeHandler';

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
    <SafeAreaView className={'flex-1 dark:bg-stone-900 bg-white'}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? 'black' : 'white'}
      />

      <GestureHandlerRootView className="flex-1">
        <View
          className={`flex-1 flex justify-center items-center gap-8 
          dark:bg-stone-900 bg-white
        `}>
          <Text
            className={`dark:text-sky-500 text-sky-300
          text-center font-bold text-4xl`}>
            🧸 Count: {bears}
          </Text>

          <View className="flex flex-row justify-center items-center w-full gap-5">
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

          <View>
            <TextInput
              className="border-2 border-gray-300 dark:text-white rounded-[2rem] px-5 py-2"
              defaultValue={config.API_URL}
            />
          </View>

          <ThemeToggler />
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
