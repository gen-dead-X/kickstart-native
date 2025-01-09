/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import '../global.css';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : Colors.lighter,
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? 'bg-stone-900' : 'bg-white'}`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        className={`flex-1 justify-center items-center ${
          isDarkMode ? 'bg-stone-900' : 'bg-white'
        }`}>
        <Text
          className={`${
            isDarkMode ? 'text-sky-200' : 'text-sky-700'
          } text-center font-bold text-4xl`}>
          Hello Tailwind
        </Text>

        {/* Theme Toggle Button */}
        <TouchableOpacity
          className={`w-20 ${
            isDarkMode ? 'bg-gray-700' : 'bg-blue-300'
          } p-2 rounded-[2rem] mt-5`}
          onPress={() => setIsDarkMode(!isDarkMode)}>
          <View
            className={`h-5 w-5 rounded-full ${
              isDarkMode ? 'ml-auto  bg-green-500' : 'bg-yellow-300'
            }`}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
