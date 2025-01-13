import {create} from 'zustand';
import storage from '../storage/storage';

type Bear = {
  bears: number;
};

type Theme = 'light' | 'dark' | 'system';

export type StoreState = {
  bears: number;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: Bear) => void;
};

export const useStore = create<StoreState>(set => ({
  bears: 0,
  theme: (storage.getString('theme') as Theme) || 'system',
  setTheme: (theme: Theme) => set({theme}),
  increasePopulation: () => set((state: Bear) => ({bears: state.bears + 1})),
  decreasePopulation: () => set((state: Bear) => ({bears: state.bears - 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: (newBears: Bear) => set({bears: newBears.bears}),
}));
