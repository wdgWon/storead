"use client";

import { ChangeEvent, useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";

import { useBookSearchMutation } from "./mutation";

export const useBookSearch = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  // const debouncedValue = useDebounce(inputValue, 1000);
  const { mutate, isPending, data: bookList } = useBookSearchMutation();

  const handleOnFocus = () => {
    setIsOpen(true);
  };

  const handleOnBlur = () => {
    setIsOpen(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim()) {
        mutate(inputValue);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [mutate, inputValue]);

  // useEffect(() => {
  //   if (debouncedValue !== "") {
  //     mutate(debouncedValue);
  //   }
  // }, [mutate, debouncedValue]);

  return {
    isOpen,
    setIsOpen,
    isPending,
    handleOnFocus,
    handleOnBlur,
    handleOnChange,
    bookList,
  };
};
