"use client";

import { useFormContext } from "react-hook-form";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { ReviewFormValue } from "../hooks/useReviewForm";

function Period() {
  const { control } = useFormContext<ReviewFormValue>();

  return (
    <FormField
      control={control}
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
  );
}

export default Period;
