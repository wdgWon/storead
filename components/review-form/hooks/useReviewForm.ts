import { useEffect, useRef } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useSelectBook } from "@/hooks/useSelectBook";

import { reviewSchema } from "../constants/schema";

interface ReviewFormValue {
  title: string;
  period: DateRange;
  isBookSelected: boolean;
}

export const useReviewForm = () => {
  const bookSearchRef = useRef<HTMLDivElement>(null);
  const form = useForm<ReviewFormValue>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      title: "",
      period: {},
      isBookSelected: false,
    },
  });
  const { selectedBook } = useSelectBook();

  useEffect(() => {
    form.setValue("isBookSelected", Boolean(selectedBook), {
      shouldValidate: Boolean(selectedBook) === true,
    });
  }, [form, selectedBook]);

  const onSubmit = () => {
    console.log("submit");

    //TODO: 여기에 서평 등록 api 연동
    // const title = form.getValues("title");
    // const period = form.getValues("period");
    // const isBookSelected = form.getValues("isBookSelected");
  };

  return {
    selectedBook,
    form,
    bookSearchRef,
    onSubmit,
  };
};
