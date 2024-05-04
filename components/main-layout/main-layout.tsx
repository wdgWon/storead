"use client";

import Link from "next/link";
import TypeIt from "typeit-react";

import BookSearch from "../book-search/book-search-form";

function MainLayout() {
  return (
    <main className="main-content">
      <section className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div className="text-2xl font-extrabold">
          <TypeIt
            as="h1"
            options={{ deleteSpeed: 50 }}
            getBeforeInit={(instance) => {
              instance
                .type("북로그에 오신 것을 환영합니다!")
                .pause(3000)
                .delete()
                .type("원하시는 서평을 검색해보세요.");
              return instance;
            }}
          />
        </div>
        <BookSearch />
      </section>
    </main>
  );
}

export default MainLayout;
