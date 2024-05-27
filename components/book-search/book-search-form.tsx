"use client";

import BookCardSkeleton from "../book-card/book-card-skeleton";
import { Input } from "../ui/input";
import BookSearchList from "./components/book-search-list";
import { useBookSearch } from "./hooks/useBookSearch";

//TODO: handleBookSearch 디바운싱
function BookSearch() {
  const {
    isOpen,
    isPending,
    handleOnFocus,
    handleOnBlur,
    handleOnChange,
    bookList,
  } = useBookSearch();

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Input
          className="w-96"
          placeholder="Type a command or search..."
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
        {isOpen && isPending ? (
          <BookCardSkeleton />
        ) : (
          <BookSearchList bookList={bookList?.items || []} />
        )}
      </div>
    </div>
  );
}

export default BookSearch;
