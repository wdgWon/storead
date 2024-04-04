import { Noto_Sans_KR } from "next/font/google";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import ReactQueryProviders from "@/providers/ReactQueryProvider";

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
          fontSans.className
        )}
      >
        <ReactQueryProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
