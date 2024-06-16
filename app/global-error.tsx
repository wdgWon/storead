"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogoutError } from "@/constants/customError";
import "@/styles/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: (Error | LogoutError) & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  // if (error instanceof LogoutError) {
  //   console.log("error occuired");
  //   return router.push("/logout");
  // }

  return (
    <html>
      <body>
        <h2>😓 이게 왜이러지...</h2>
        <Button
          onClick={() => {
            reset();
            router.back();
          }}
        >
          🐛벌레 박멸!
        </Button>
      </body>
    </html>
  );
}
