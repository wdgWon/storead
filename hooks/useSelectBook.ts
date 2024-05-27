import { useEffect } from "react";

import { useSelectedBookStore } from "@/store/selected-book-store";

export const useSelectBook = () => {
  const { selectedBook, reset } = useSelectedBookStore();

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return { selectedBook };
};
