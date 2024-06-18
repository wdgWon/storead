"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ReviewFormValue } from "../hooks/useReviewForm";

function Title() {
  const { control } = useFormContext<ReviewFormValue>();

  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-semibold">제목</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="제목을 입력해주세요."
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Title;
