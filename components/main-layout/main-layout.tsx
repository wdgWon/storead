"use client";

import { useEffect, useRef } from "react";

import Cookies from "js-cookie";
import { LucideCircleX } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import TypeIt from "typeit-react";

import { MAIN_TOAST } from "@/constants/identifier";

import BookSearch from "../book-search/book-search-form";

function MainLayout() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }
    const mainToast = Cookies.get(MAIN_TOAST);

    if (mainToast) {
      toast.error(mainToast, {
        icon: <LucideCircleX color="red" />,
      });
      Cookies.remove(MAIN_TOAST);
    }
  }, []);
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
