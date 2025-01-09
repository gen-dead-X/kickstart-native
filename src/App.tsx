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

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colorScheme} from 'nativewind';

import {StoreState, useStore} from './store/store';
import config from './config/config';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  /* Import State Hooks */
  const bears = useStore((state: StoreState) => state.bears);
  const increasePopulation = useStore(
    (state: StoreState) => state.increasePopulation,
  );
  const decreasePopulation = useStore(
    (state: StoreState) => state.decreasePopulation,
  );
  const removeAllBears = useStore((state: StoreState) => state.removeAllBears);

  useEffect(() => {
    colorScheme.set(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? 'bg-stone-900' : 'bg-white'}`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />

      <View
        className={`flex-1 justify-center items-center gap-8 ${
          isDarkMode ? 'bg-stone-900' : 'bg-white'
        }`}>
        {/* Theme Toggle Button */}
        <TouchableOpacity
          className={`w-20 ${
            isDarkMode ? 'bg-gray-700' : 'bg-blue-300'
          } p-2 rounded-[2rem]`}
          onPress={() => setIsDarkMode(!isDarkMode)}>
          <View
            className={`h-5 w-5 rounded-full ${
              isDarkMode ? 'ml-auto  bg-green-500' : 'bg-yellow-300'
            }`}
          />
        </TouchableOpacity>

        <Text
          className={`${
            isDarkMode ? 'text-sky-200' : 'text-sky-700'
          } text-center font-bold text-4xl`}>
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
      </View>
    </SafeAreaView>
  );
}

export default App;
