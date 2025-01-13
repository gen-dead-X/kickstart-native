import React from 'react';
import {ScrollView, View} from 'react-native';

import ZustandDemo from '../../ui/App/ZustandDemo';
import FormPaperInput from '../../ui/Global/Input/FormPaperInput';
import VectorIconsDemo from '../../ui/App/VectorIconsDemo';
import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler';
import NavigationTester from '../../ui/App/NavigationTester';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} className="flex-1">
      <View
        className={
          'flex flex-1 items-center justify-center gap-14 bg-white dark:bg-gray-900'
        }>
        <ZustandDemo />
        <FormPaperInput />
        <VectorIconsDemo />
        <NavigationTester />
        <ThemeToggler />
      </View>
    </ScrollView>
  );
}
