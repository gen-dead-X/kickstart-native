import React, {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import themeColors from '../config/rnPaper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useStore} from '../store/store';

export default function AppProvider({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const theme = useStore(state => state.appTheme);

  useEffect(() => {
    console.log({theme});
  }, [theme]);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <PaperProvider theme={themeColors}>
          <NavigationContainer>
            <SafeAreaView className={'flex-1 bg-white dark:bg-slate-900'}>
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
