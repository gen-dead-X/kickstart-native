import React from 'react';
import {PaperProvider} from 'react-native-paper';
import theme from '../config/rnPaper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function AppProvider({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <GestureHandlerRootView>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </GestureHandlerRootView>
  );
}
