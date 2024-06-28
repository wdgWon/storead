"use client";

import { BookDetail } from "api-domain";
import { useRouter } from "next/navigation";

import { useSelectedBookStore } from "@/store/selected-book-store";

import { Button } from "../ui/button";

function SelectableButtonGroup(props: BookDetail) {
  const router = useRouter();
  const { selectedBook, setSelectedBook, reset } = useSelectedBookStore();
  return (
    <div className="flex gap-2">
      {selectedBook && selectedBook.isbn === props.isbn ? (
        <Button
          onClick={() => reset()}
          className="bg-red-400"
        >
          삭제하기
        </Button>
      ) : (
        <Button
          onClick={() => {
            setSelectedBook(props);
            router.back();
          }}
        >
          선택하기
        </Button>
      )}
      <Button type="button">
        <a
          href={props.link}
          target="blank"
        >
          바로가기
        </a>
      </Button>
    </div>
  );
}

export default SelectableButtonGroup;
