import {create} from 'zustand';

type Bear = {
  bears: number;
};

export type StoreState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: Bear) => void;
};

export const useStore = create<StoreState>(set => ({
  bears: 0,
  increasePopulation: () => set((state: Bear) => ({bears: state.bears + 1})),
  decreasePopulation: () => set((state: Bear) => ({bears: state.bears - 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: (newBears: Bear) => set({bears: newBears.bears}),
}));
