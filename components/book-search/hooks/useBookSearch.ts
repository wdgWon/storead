"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useBookSearchMutation } from "../mutation";

const bookSearchFormSchema = z.object({
  keyword: z.string().min(2, {
    message: "2글자 이상 입력해야합니다.",
  }),
});

export type BookSearchValues = z.infer<typeof bookSearchFormSchema>;

export const useBookSearch = () => {
  const form = useForm<BookSearchValues>({
    resolver: zodResolver(bookSearchFormSchema),
    defaultValues: {
      keyword: "",
    },
  });

  const [isOpen, setIsOpen] = useState(true);
  // const [inputValue, setInputValue] = useState("");
  const { mutate, isPending, data: bookList } = useBookSearchMutation();

  // const handleOnFocus = () => {
  //   setIsOpen(true);
  // };

  // const handleOnBlur = () => {
  //   setIsOpen(false);
  // };
  const onSubmit = (values: BookSearchValues) => {
    mutate({ query: values.keyword });
  };

  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (inputValue.trim()) {
  //       mutate({ query: inputValue });
  //     }
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [mutate, inputValue]);

  return {
    isOpen,
    setIsOpen,
    isPending,
    onSubmit,
    form,
    // handleOnFocus,
    // handleOnBlur,
    // handleOnChange,
    bookList,
  };
};
