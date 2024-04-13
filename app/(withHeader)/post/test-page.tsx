"use client";

import { useHeaderProgress } from "@/hooks/useHeaderProgress";

function TestPage() {
  const { elementRef } = useHeaderProgress<HTMLDivElement>();
  return (
    <div
      ref={elementRef}
      className="bg-green-500 flex flex-col gap-4 py-4"
    >
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={`test post ${index}`}
            className="h-[100px] bg-white flex justify-center items-center"
          >
            {index}
          </div>
        ))}
    </div>
  );
}

export default TestPage;
