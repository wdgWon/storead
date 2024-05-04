"use client";

import { Progress } from "@/components/ui/progress";
import { useHeaderProgressStore } from "@/store/header-progress-store";

function HeaderProgress() {
  const { isShow, scrollProgress } = useHeaderProgressStore();

  return (
    <>
      {isShow && (
        <Progress
          value={scrollProgress}
          className="w-full h-2 bg-slate-400"
          indicatorColor="bg-blue-300"
        />
      )}
    </>
  );
}

export default HeaderProgress;
