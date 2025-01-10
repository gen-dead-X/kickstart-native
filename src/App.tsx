if (__DEV__) {
  require('../ReactotronConfig.js');
}

import '../global.css';

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import ThemeToggler from './ui/ThemeToggler/ThemeToggler';
import useThemeHandler from './hooks/useThemeHandler';
import AppProvider from './Providers/AppProvider';
import ZustandDemo from './ui/App/ZustandDemo';
import VectorIconsDemo from './ui/App/VectorIconsDemo';
import FormPaperInput from './ui/Global/Input/FormPaperInput';

function App(): React.JSX.Element {
  const {theme} = useThemeHandler();

  return (
    <AppProvider>
      <SafeAreaView className={'flex-1 bg-white dark:bg-stone-900'}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme === 'dark' ? 'black' : 'white'}
        />

        <View className="flex-1">
          <View
            className={
              'flex flex-1 items-center justify-center gap-14 bg-white dark:bg-stone-900'
            }>
            <ZustandDemo />
            <FormPaperInput />
            <VectorIconsDemo />
            <ThemeToggler />
          </View>
        </View>
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
