import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import {useMMKV} from 'react-native-mmkv';

type Theme = 'light' | 'dark' | 'system';

export default function useThemeHandler() {
  const [theme, setTheme] = useState<Theme>('system');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const storage = useMMKV();

  useEffect(() => {
    const loadTheme = () => {
      const storedTheme = storage.getString('theme');
      if (storedTheme) {
        setTheme(storedTheme as Theme);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      if (newTheme === 'system') {
        const systemTheme = Appearance.getColorScheme();
        setCurrentTheme(systemTheme === 'dark' ? 'dark' : 'light');
      } else {
        setCurrentTheme(newTheme);
      }
    };

    handleThemeChange(theme);

    const listener = Appearance.addChangeListener(({colorScheme}) => {
      if (theme === 'system') {
        setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });

    return () => {
      listener.remove();
    };
  }, [theme]);

  const setThemeValue = (newTheme: Theme) => {
    storage.set('theme', newTheme);
    setTheme(newTheme);
  };

  return {
    theme: currentTheme,
    setTheme: setThemeValue,
  };
}
