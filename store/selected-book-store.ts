import { BookDetail } from "api-domain";
import { create } from "zustand";

interface SelectedBookStore {
  selectedBook: BookDetail | null;
  setSelectedBook: (selectedBook: BookDetail) => void;
  reset: () => void;
}

const initialState = {
  selectedBook: null,
};

export const useSelectedBookStore = create<SelectedBookStore>()((set) => ({
  ...initialState,
  setSelectedBook: (selectedBook) => set({ selectedBook }),
  reset: () => set(initialState),
}));
