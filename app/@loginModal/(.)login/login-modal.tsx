"use client";

import { useRouter } from "next/navigation";

import LoginLayout from "@/components/login-layout/login-layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function LoginModal() {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => !isOpen && router.back()}
    >
      <DialogContent className="p-0 overflow-hidden shadow-lg">
        <LoginLayout />
      </DialogContent>
    </Dialog>
  );
}
