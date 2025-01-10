import {View} from 'react-native';
import React from 'react';
import SectionHeader from '../../App/SectionHeader';
import {TextInput} from 'react-native-paper';
import config from '../../../config/config';

export default function FormPaperInput() {
  return (
    <View className="flex gap-5">
      <SectionHeader title="React Native Paper" />
      <View className="h-14">
        <TextInput
          label={'API URL'}
          className="px-5 py-2"
          defaultValue={config.API_URL}
        />
      </View>
    </View>
  );
}
