"use client";

import { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

import Header from "@/components/header/header";

const Footer = dynamic(() => import("@/components/footer/footer"));

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <div className="flex-grow"></div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
