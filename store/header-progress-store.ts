import { create } from "zustand";

interface HeaderProgressStore {
  isShow: boolean;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  setIsShow: (show: boolean) => void;
  reset: () => void;
}

const initialState = {
  isShow: false,
  scrollProgress: 0,
};

export const useHeaderProgressStore = create<HeaderProgressStore>()((set) => ({
  ...initialState,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setIsShow: (show) => set({ isShow: show }),
  reset: () => set(() => initialState),
}));
