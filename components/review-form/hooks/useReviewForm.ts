"use client";

import { useEffect, useRef } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import RichEditor, {
  RichEditorRef,
} from "@/components/rich-editor/rich-editor";
import { useSelectBook } from "@/hooks/useSelectBook";
import { createArticle } from "@/lib/apis/article/createArticle";
import { booksCreate } from "@/lib/apis/book/booksCreate";
import { useTagsStore } from "@/store/tags-store";

import { reviewSchema } from "../constants/schema";
import { useTags } from "./useTags";

export type ReviewFormValue = {
  title: string;
  // period: DateRange;
  isBookSelected: boolean;
};

export const useReviewForm = () => {
  const bookSearchRef = useRef<HTMLDivElement>(null);
  const richEditorRef = useRef<RichEditorRef>(null);
  const form = useForm<ReviewFormValue>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      title: "",
      // period: {},
      isBookSelected: false,
    },
  });
  const { selectedBook } = useSelectBook();
  const tags = useTagsStore((state) => state.tags);

  useEffect(() => {
    form.setValue("isBookSelected", Boolean(selectedBook), {
      shouldValidate: Boolean(selectedBook) === true,
    });
  }, [form, selectedBook]);

  const onSubmit = async () => {
    //TODO: 여기에 서평 등록 api 연동
    // const title = form.getValues("title");
    // const period = form.getValues("period");
    // const isBookSelected = form.getValues("isBookSelected");

    if (!selectedBook) return;

    // const bookDetail = await booksCreate({
    //   isbn: selectedBook.isbn,
    //   description: selectedBook.description,
    //   title: selectedBook.title,
    //   author: selectedBook.author,
    //   published_date: selectedBook.pubdate,
    //   thumbnail_url: selectedBook.image,
    // });

    const body = richEditorRef.current?.getJSON();

    console.log("review form submited");

    //TODO: 본문 내용을 요약한 내용 출력
    // const text = richEditorRef.current?.getText()?.slice(0, 30)

    // await createArticle({
    //   body: JSON.stringify(body),
    //   book: bookDetail.id,
    //   //FIXME: description을 getText()로 일정 구간만큼 출력할 수 있는지 확인 필요
    //   description: "",
    //   //TODO: 태그 입력
    //   tags,
    //   title: form.getValues("title"),
    // });
  };

  return {
    selectedBook,
    form,
    bookSearchRef,
    richEditorRef,
    onSubmit,
  };
};
