"use client";

import { Progress } from "@/components/ui/progress";

interface HeaderProgressProps {
  value: number;
}

function HeaderProgress({ value }: HeaderProgressProps) {
  return (
    <Progress
      value={value}
      className="w-full h-2 bg-slate-400"
      indicatorColor="bg-blue-300"
    />
  );
}

export default HeaderProgress;
