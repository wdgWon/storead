import { create } from "zustand";

type Tags = {
  tags: string[];
  replaceAll: (tags: string[]) => void;
  append: (tag: string) => void;
  remove: (idx: number) => void;
  reset: () => void;
};

const initialState = {
  tags: [],
};

export const useTagsStore = create<Tags>()((set) => ({
  ...initialState,
  replaceAll: (tags) =>
    set({
      tags: Array.from(
        new Set([
          ...tags.reduce<string[]>(
            (arr, tag) => (tag.trim().length > 0 ? [...arr, tag] : arr),
            [],
          ),
        ]),
      ),
    }),
  append: (tag) =>
    set((state) => ({
      tags:
        tag.trim().length > 0
          ? Array.from(new Set([...state.tags, tag]))
          : state.tags,
    })),
  remove: (idx: number) =>
    set((state) => ({
      tags: [...state.tags.filter((_, index) => index !== idx)],
    })),
  reset: () => set(() => initialState),
}));
