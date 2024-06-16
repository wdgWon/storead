"use client";

import { useRouter } from "next/navigation";

import LogoutConfirmLayout from "@/components/logout-confirm-layout/logout-confirm-layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function LogoutModal() {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => !isOpen && router.back()}
    >
      <DialogContent className="p-0 overflow-hidden shadow-lg">
        <LogoutConfirmLayout />
      </DialogContent>
    </Dialog>
  );
}
