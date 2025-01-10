import React from 'react';
import {StoreState, useStore} from '../../store/store';
import {Text, TouchableOpacity, View} from 'react-native';
import SectionHeader from './SectionHeader';

export default function ZustandDemo() {
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
    <View className="flex items-center gap-5">
      <SectionHeader title="Zustand For State Management" />

      <Text
        className={
          'text-center text-4xl font-bold text-sky-300 dark:text-sky-500'
        }>
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
  );
}
