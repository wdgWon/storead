"use client";

import { KeyboardEvent, useEffect, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { tagSchema } from "../constants/schema";
import { useTags } from "../hooks/useTags";

type TagFormValue = {
  tag: string;
};

function Tags() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { tags, append, remove } = useTags();

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      e.preventDefault();
      const value = inputRef.current.value;
      append(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">태그</h3>
      <div className="p-2 bg-slate-100 dark:bg-slate-800 space-y-2 rounded-md">
        <ul className="flex flex-wrap gap-1">
          {tags.map((tag, idx) => (
            <li key={`${tag}/${idx}`}>
              <Badge
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(idx);
                }}
              >{`#${tag}`}</Badge>
            </li>
          ))}
        </ul>
        {tags.length > 0 && <Separator />}
        <Input
          ref={inputRef}
          className="w-full min-w-48 bg-transparent"
          placeholder="태그를 입력해주세요."
          onKeyDown={onEnter}
        />
      </div>
    </div>
  );
}

export default Tags;
