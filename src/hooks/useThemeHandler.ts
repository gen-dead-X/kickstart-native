import {colorScheme} from 'nativewind';
import {useEffect} from 'react';
import {Appearance} from 'react-native';
import {useStore, StoreState} from '../store/store';

type Theme = 'light' | 'dark' | 'system';

export default function useThemeHandler() {
  const theme = useStore((state: StoreState) => state.theme);
  const setTheme = useStore((state: StoreState) => state.setTheme);

  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      if (newTheme === 'system') {
        const systemTheme = Appearance.getColorScheme();
        setTheme(systemTheme === 'dark' ? 'dark' : 'light');
      } else {
        setTheme(newTheme);
      }
    };

    handleThemeChange(theme);

    const listener = Appearance.addChangeListener(
      ({colorScheme: themeColorScheme}) => {
        if (theme === 'system') {
          setTheme(themeColorScheme === 'dark' ? 'dark' : 'light');
        }
      },
    );

    return () => {
      listener.remove();
    };
  }, [theme]);

  useEffect(() => {
    colorScheme.set(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
