import React from 'react';
import {PaperProvider} from 'react-native-paper';
import themeColors from '../config/rnPaper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import useThemeHandler from '../hooks/useThemeHandler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function AppProvider({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const {theme} = useThemeHandler();

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <PaperProvider theme={themeColors}>
          <NavigationContainer>
            <SafeAreaView className={'flex-1 bg-white dark:bg-slate-950'}>
              <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme === 'dark' ? 'black' : 'white'}
              />
              {children}
            </SafeAreaView>
          </NavigationContainer>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
