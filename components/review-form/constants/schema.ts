import { DateRange } from "react-day-picker";

import zod from "zod";

export const reviewSchema = zod
  .object({
    title: zod.string().trim().min(1, "제목을 입력해주세요."),
    period: zod
      .custom<DateRange>()
      .refine(
        (val) => val.from instanceof Date || val.to instanceof Date,
        "정확한 날짜를 입력해주세요.",
      )
      .refine((val) => val.from instanceof Date, "시작일을 입력해주세요.")
      .refine((val) => val.to instanceof Date, "종료일을 입력해주세요.")
      .refine(
        (val) => val.from != null && val.to != null && val.from <= val.to,
        "종료일은 시작일 이후여야 합니다.",
      ),
    isBookSelected: zod
      .boolean()
      .refine((val) => val === true, "서평 등록할 책을 선택해주세요."),
  })
  .required();
