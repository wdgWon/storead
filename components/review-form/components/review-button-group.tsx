"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

function ReviewButtonGroup() {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant="secondary"
        className="flex-grow"
        onClick={() => router.back()}
      >
        취소
      </Button>
      <Button
        className="flex-grow"
        type="submit"
      >
        등록하기
      </Button>
    </div>
  );
}

export default ReviewButtonGroup;
