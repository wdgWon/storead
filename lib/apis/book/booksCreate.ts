"use client";

import { BookPayload } from "@/api/generated/models/bookPayload";
import { BookResponse } from "@/api/generated/models/bookResponse";

import { clientInstance } from "../client-instance";

export const booksCreate = async (payload: BookPayload) => {
  const res = await clientInstance<BookResponse>({
    endPoint: `/books`,
    method: "POST",
    body: JSON.stringify(payload),
  });

  return res;
};
