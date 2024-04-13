"use client";

import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>😓 이게 왜이러지...</h2>
        <Button onClick={() => reset()}>🐛벌레 박멸!</Button>
      </body>
    </html>
  );
}
