import React, {useCallback, useRef} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import useThemeHandler from '../../hooks/useThemeHandler';
import {StoreState, useStore} from '../../store/store';

type ThemeOption = 'light' | 'dark' | 'system';

export default function ThemeToggler() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
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
    bottomSheetRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props_}
        pressBehavior="close"
        opacity={0.5}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <>
      <TouchableOpacity
        onPress={openBottomSheet}
        className="rounded-full bg-blue-200 px-4 py-2 dark:bg-blue-500">
        <Text className="dark:text-white">Change Theme</Text>
      </TouchableOpacity>

      <BottomSheetModal
        index={0}
        enableDynamicSizing
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        enablePanDownToClose
        handleIndicatorStyle={{
          backgroundColor: '#e5e7eb',
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
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 40,
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
