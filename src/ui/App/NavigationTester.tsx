import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigator.types';

export default function NavigationTester() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      className="rounded-lg bg-pink-200 p-2 dark:bg-pink-500"
      onPress={() => navigation.navigate('DemoNavigation')}>
      <Text className="dark:text-white">Test Navigation</Text>
    </TouchableOpacity>
  );
}
