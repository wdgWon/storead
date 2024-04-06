import { Noto_Sans_KR } from "next/font/google";

import { LayoutProps } from "@/.next/types/app/layout";
import { cn } from "@/lib/utils";
import NextThemeProvider from "@/providers/NextThemeProvider";
import ReactQueryProviders from "@/providers/ReactQueryProvider";

const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ko-KR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <ReactQueryProviders>
          <NextThemeProvider>{children}</NextThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
