import { Skeleton } from "@/components/ui/skeleton";

function BookCardSkeleton() {
  return (
    <div className="flex py-4 gap-4">
      <Skeleton className="h-[200px] w-[150px] rounded-xl" />
      <div className="space-y-3 py-4">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-[100px] w-[250px]" />
      </div>
    </div>
  );
}

export default BookCardSkeleton;
