import {colorScheme} from 'nativewind';
import {useEffect} from 'react';
import {Appearance} from 'react-native';
import {useStore, StoreState} from '../store/store';
import {useMMKV} from 'react-native-mmkv';

export default function useThemeHandler() {
  const theme = useStore((state: StoreState) => state.theme);
  const setTheme = useStore((state: StoreState) => state.setTheme);
  const setAppTheme = useStore((state: StoreState) => state.setAppTheme);
  const storage = useMMKV();

  // Handle theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      if (theme === 'system') {
        console.log('Getting Color Scheme');
        const systemTheme = Appearance.getColorScheme();
        console.log('Set System ThemeContext', {systemTheme});
        colorScheme.set(systemTheme ?? 'light');
        setAppTheme(systemTheme ?? 'light');
      } else {
        colorScheme.set(theme);
        setAppTheme(theme);
      }

      storage.set('theme', theme);
    };

    handleThemeChange();

    const listener = Appearance.addChangeListener(
      ({colorScheme: newColorScheme}) => {
        if (theme === 'system') {
          colorScheme.set(newColorScheme ?? 'light');
          setAppTheme(newColorScheme ?? 'light');
        }
      },
    );

    return () => {
      listener.remove();
    };
  }, [theme, setAppTheme, storage]);

  return {theme, setTheme};
}
