"use client";

import { BookDetail } from "api-domain";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useSelectedBookStore } from "@/store/selected-book-store";

function BookCard(props: BookDetail) {
  const router = useRouter();
  const { selectedBook, setSelectedBook, reset } = useSelectedBookStore();

  //TODO: 해당 책에 대한 서평 목록 / 해당 책 서평 작성 버튼
  return (
    <div className="flex gap-8 h-[250px] p-4">
      <Image
        src={props.image}
        alt={props.title}
        width={180}
        height={250}
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">{props.title}</h2>
        <h3 className="font-light">{props.author}</h3>
        <p className="max-w-[500px] font-sans font-extralight flex-grow text-overflow">
          {props.description}
        </p>
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
          <Button>
            <a
              href={props.link}
              target="blank"
            >
              바로가기
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
