import { create } from 'zustand';

const useScrollState = create((set) => ({
  x: 0,
  y: 0,
  setScroll: (newState) => set(newState),
}));

export { useScrollState };
