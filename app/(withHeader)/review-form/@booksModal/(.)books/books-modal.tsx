"use client";

import { useRouter } from "next/navigation";

import BookSearch from "@/components/book-search/book-search-form";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function BooksModal() {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => !isOpen && router.back()}
    >
      <DialogContent className="p-2 overflow-hidden shadow-lg">
        <BookSearch />
      </DialogContent>
    </Dialog>
  );
}

export default BooksModal;
