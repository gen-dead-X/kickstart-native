import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import useThemeHandler from '../../hooks/useThemeHandler';

type ThemeOption = 'light' | 'dark' | 'system';

export default function ThemeToggler() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const {theme, setTheme} = useThemeHandler();

  const handleThemeSelect = useCallback((option: ThemeOption) => {
    console.log({option: option});
    setTheme(option);
    bottomSheetRef.current?.close();
  }, []);

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
      <Pressable onPress={openBottomSheet} style={[styles.trigger]}>
        <Text>Change Theme</Text>
      </Pressable>

      {isBottomSheetOpen && (
        <TouchableWithoutFeedback
          onPress={() => bottomSheetRef.current?.close()}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        enableDynamicSizing
        enablePanDownToClose
        index={-1}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>Select Theme</Text>
          {(['light', 'dark', 'system'] as Array<ThemeOption>).map(option => (
            <TouchableOpacity
              key={option}
              style={[styles.option]}
              className={`${option === theme ? 'bg-blue-200' : 'bg-gray-200'}`}
              onPress={() => handleThemeSelect(option)}>
              <Text style={styles.optionText}>{option}</Text>
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
  trigger: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
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
