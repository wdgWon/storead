"use client";

import { ForwardedRef, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

import { BookDetail } from "api-domain";
import Link from "next/link";

import { BookCard } from "@/components/book-card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

import { ReviewFormValue } from "../hooks/useReviewForm";

interface Props {
  selectedBook: BookDetail | null;
}

const SelectedBookCard = forwardRef<HTMLDivElement, Props>(
  function SelectedBookCard(
    { selectedBook }: Props,
    bookSearchRef: ForwardedRef<HTMLDivElement>,
  ) {
    const { control } = useFormContext<ReviewFormValue>();

    return (
      <FormField
        control={control}
        name="isBookSelected"
        render={({ fieldState }) => (
          <FormItem>
            <FormLabel className="font-bold text-lg">책 검색</FormLabel>
            {selectedBook != null ? (
              <div className="p-2 border-double border-2">
                <BookCard {...selectedBook}>
                  <BookCard.ButtonGroup {...selectedBook} />
                </BookCard>
              </div>
            ) : (
              <Link href="/review-form/books">
                <div
                  ref={bookSearchRef}
                  className={cn(
                    "p-1 w-full h-[120px] border-dotted border-2 rounded-xl hover:cursor-pointer hover:brightness-75 hover:dark:brightness-125 hover:shadow-lg dark:hover:shadow-slate-600 transition-all",
                    fieldState.invalid && "border-red-500",
                  )}
                >
                  <div className="flex justify-center items-center h-full border-dotted border-2 rounded-lg">
                    <span className="font-semibold text-slate-400">
                      아직 선택된 책이 없습니다.
                    </span>
                  </div>
                </div>
              </Link>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  },
);

SelectedBookCard.displayName = "SelectedBookCard";

export default SelectedBookCard;
