import {Text} from 'react-native';
import React from 'react';

export default function SectionHeader({
  title,
}: Readonly<{title: string}>): React.JSX.Element {
  return (
    <Text className="rounded-lg border-2 border-gray-300 bg-blue-200 px-5 py-2 font-bold dark:bg-blue-600 dark:text-white">
      🔵 {title} 🔵
    </Text>
  );
}
