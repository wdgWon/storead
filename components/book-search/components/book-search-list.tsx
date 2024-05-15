"use client";

import { BookDetail } from "api-domain";

import BookCard from "./book-card/book-card";

interface BookSearchListProps {
  bookList: BookDetail[];
}

function BookSearchList({ bookList }: BookSearchListProps) {
  return (
    <ul className="flex flex-col gap-16 p-4 max-w-[800px] max-h-[400px] overflow-x-hidden">
      {bookList.map((item, idx) => (
        <li
          key={`${item.isbn}/${idx}`}
          className="rounded-lg hover:shadow-lg transition-colors"
        >
          <BookCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export default BookSearchList;
