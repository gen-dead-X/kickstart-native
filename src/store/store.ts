import {create} from 'zustand';
import storage from '../storage/storage';
import {Appearance} from 'react-native';

type Bear = {
  bears: number;
};

type Theme = 'light' | 'dark' | 'system';

function getAppearanceTheme() {
  const systemTheme = Appearance.getColorScheme();

  const userPreferredTheme = storage.getString('theme') as Theme;

  if (userPreferredTheme === 'system') {
    return systemTheme ?? 'light';
  }

  return userPreferredTheme ?? 'light';
}

export type StoreState = {
  bears: number;
  appTheme: Theme;
  setAppTheme: (appTheme: Theme) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: Bear) => void;
};

export const useStore = create<StoreState>(set => ({
  bears: 0,
  appTheme: getAppearanceTheme(),
  setAppTheme: (appTheme: Theme) => set({appTheme}),
  theme: (storage.getString('theme') as Theme) || 'system',
  setTheme: (theme: Theme) => set({theme}),
  increasePopulation: () => set((state: Bear) => ({bears: state.bears + 1})),
  decreasePopulation: () => set((state: Bear) => ({bears: state.bears - 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: (newBears: Bear) => set({bears: newBears.bears}),
}));
