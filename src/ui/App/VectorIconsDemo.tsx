import {View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SectionHeader from './SectionHeader';

export default function VectorIconsDemo() {
  return (
    <View className="flex justify-center gap-5">
      <SectionHeader title="React Native Vector Icons" />
      <View className="flex flex-row justify-center gap-5">
        <MaterialIcons name="rocket-launch" size={40} color="purple" />
        <MaterialIcons name="rocket-launch" size={40} color="red" />
        <MaterialIcons name="rocket-launch" size={40} color="orange" />
      </View>
    </View>
  );
}
