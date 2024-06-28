"use client";

import { GoPeople } from "react-icons/go";
import { LuDot } from "react-icons/lu";

import { useSuspenseQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components/ui/skeleton";
import { followerListQueryOption } from "@/hooks/queryOptions/followerListQueryOption";
import { followingListQueryOption } from "@/hooks/queryOptions/followingListQueryOption";

interface Props {
  profileId: string;
}

function Follow({ profileId }: Props) {
  const { data: followerList, isPending: isFollowerPending } = useSuspenseQuery(
    {
      ...followerListQueryOption(profileId),
    },
  );
  const { data: followingList, isPending: isFollowingPending } =
    useSuspenseQuery({
      ...followingListQueryOption(profileId),
    });

  if (isFollowerPending || isFollowingPending) {
    return <Skeleton className="w-24 h-8" />;
  }

  return (
    <div className="flex items-center gap-2">
      <GoPeople />
      <section className="flex items-center">
        <div className="flex gap-1 hover:text-blue-500 hover:cursor-pointer">
          <span className="font-bold">{followerList.followers_count || 0}</span>
          followers
        </div>
        <LuDot />
        <div className="flex gap-1 hover:text-blue-500 hover:cursor-pointer">
          <span className="font-bold">
            {followingList.followers_count || 0}
          </span>
          followings
        </div>
      </section>
    </div>
  );
}

export default Follow;
