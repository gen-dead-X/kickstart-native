import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import useThemeHandler from '../../hooks/useThemeHandler';
import {StoreState, useStore} from '../../store/store';

type ThemeOption = 'light' | 'dark' | 'system';

export default function ThemeToggler() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const {theme, setTheme} = useThemeHandler();
  const appTheme = useStore((state: StoreState) => state.appTheme);

  const handleThemeSelect = useCallback(
    (option: ThemeOption) => {
      setTheme(option);
      bottomSheetRef.current?.close();
    },
    [setTheme],
  );

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
    setIsBottomSheetOpen(true);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setIsBottomSheetOpen(false);
    }
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={openBottomSheet}
        className="rounded-full bg-blue-200 px-4 py-2 dark:bg-blue-500">
        <Text className="dark:text-white">Change Theme</Text>
      </TouchableOpacity>

      {isBottomSheetOpen && (
        <TouchableWithoutFeedback
          onPress={() => bottomSheetRef.current?.close()}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['50%']}
        enablePanDownToClose
        index={-1}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: appTheme === 'dark' ? 'white' : 'black',
          height: 5,
          width: 80,
        }}
        handleStyle={{
          backgroundColor: appTheme === 'dark' ? '#1e293b' : 'white',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        <BottomSheetView
          style={styles.contentContainer}
          className={'dark:bg-slate-800'}>
          <Text style={styles.title} className={'dark:text-white'}>
            Select Theme
          </Text>
          {(['light', 'dark', 'system'] as Array<ThemeOption>).map(option => (
            <TouchableOpacity
              key={option}
              style={[styles.option]}
              className={`${option === theme ? 'bg-blue-200 dark:bg-blue-600' : 'bg-gray-200 dark:bg-slate-700'}`}
              onPress={() => handleThemeSelect(option)}>
              <Text style={styles.optionText} className="dark:text-white">
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  option: {
    padding: 16,
    marginVertical: 4,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
