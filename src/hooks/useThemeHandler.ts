import {colorScheme} from 'nativewind';
import {useEffect} from 'react';
import {Appearance} from 'react-native';
import {useStore, StoreState} from '../store/store';
import storage from '../storage/storage';

type Theme = 'light' | 'dark' | 'system';

export default function useThemeHandler() {
  const theme = useStore((state: StoreState) => state.theme);
  const setTheme = useStore((state: StoreState) => state.setTheme);

  useEffect(() => {
    const savedTheme = storage.getString('theme') as Theme;
    if (savedTheme) {
      if (savedTheme === 'system') {
        const systemTheme = Appearance.getColorScheme();
        colorScheme.set(systemTheme || 'light');
      } else {
        colorScheme.set(savedTheme);
      }
      setTheme(savedTheme);
    } else {
      const systemTheme = Appearance.getColorScheme();
      setTheme('system');
      colorScheme.set(systemTheme || 'light');
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      if (theme === 'system') {
        const systemTheme = Appearance.getColorScheme();
        colorScheme.set(systemTheme || 'light');
      } else {
        colorScheme.set(theme);
      }
      storage.set('theme', theme);
    };

    handleThemeChange();

    const listener = Appearance.addChangeListener(
      ({colorScheme: newColorScheme}) => {
        if (theme === 'system') {
          colorScheme.set(newColorScheme || 'light');
        }
      },
    );

    return () => {
      listener.remove();
    };
  }, [theme]);

  return {theme, setTheme};
}
