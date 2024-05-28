"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { LogoutError } from "@/constants/customError";

function WithHeaderLayout({ children }: PropsWithChildren) {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new LogoutError(new Error());
    }
  }, [error]);
  return (
    <>
      <Header />
      <Button
        type="button"
        onClick={() => setError(true)}
      >
        테스트 버튼
      </Button>
      {children}
      <div className="flex-grow"></div>
      <Footer />
    </>
  );
}

export default WithHeaderLayout;
