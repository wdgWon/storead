"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { BookCard } from "../book-card";
import RichEditor from "../rich-editor/rich-editor";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useReviewForm } from "./hooks/useReviewForm";

//TODO: 1. BookCard에 선택된 카드일 시 "다시 선택하기" 버튼 추가
//TODO: 2. "다시 선택하기" 클릭 시 검색창에 기본적으로 책이름 표시

function ReviewForm() {
  const { form, selectedBook, onSubmit, bookSearchRef } = useReviewForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="py-8 max-w-4xl m-auto">
          <div
            role="book select"
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="isBookSelected"
              render={() => (
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
                          form.getFieldState("isBookSelected").invalid &&
                            "border-red-500",
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
          </div>
          <div
            role="review container"
            className="mt-8 flex flex-col gap-8"
          >
            <h2 className="font-bold text-lg">서평 작성</h2>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">제목</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold block">기간</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value?.from ? (
                            field.value.to ? (
                              <>
                                {format(field.value.from, "y/L/dd", {
                                  locale: ko,
                                })}{" "}
                                -{" "}
                                {format(field.value.to, "y/L/dd", {
                                  locale: ko,
                                })}
                              </>
                            ) : (
                              format(field.value.from, "y/L/dd", {
                                locale: ko,
                              })
                            )
                          ) : (
                            <span>기간을 선택하세요.</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          initialFocus
                          mode="range"
                          selected={field.value}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <RichEditor />
          </div>
          <input
            type="submit"
            value="확인"
          />
        </div>
      </form>
    </Form>
  );
}

export default ReviewForm;
