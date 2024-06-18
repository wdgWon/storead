"use client";

import { Search } from "lucide-react";

import BookCardSkeleton from "../book-card/book-card-skeleton";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import BookSearchInput from "./components/book-search-input";
import BookSearchList from "./components/book-search-list";
import { useBookSearch } from "./hooks/useBookSearch";

function BookSearch() {
  const { isPending, bookList, onSubmit, form } = useBookSearch();

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative"
        >
          <Button
            type="submit"
            variant="ghost"
            className="absolute top-0 left-0"
          >
            <Search className="w-4 h-4" />
          </Button>
          <BookSearchInput />
        </form>
      </Form>
      {isPending ? (
        <BookCardSkeleton />
      ) : (
        <BookSearchList bookList={bookList?.items || []} />
      )}
    </div>
  );
}

export default BookSearch;
