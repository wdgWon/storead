import { PropsWithChildren, Suspense } from "react";

import { Noto_Sans_KR } from "next/font/google";

import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import NextThemeProvider from "@/providers/NextThemeProvider";
import ReactQueryProviders from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";

import Header from "../components/header/header";

const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="ko-KR"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <ReactQueryProviders>
          <NextThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
              <div className="flex-grow"></div>
              <Footer />
            </div>
          </NextThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
