import { FollowList } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const followerListQueryOption = {
  queryKey: [QUERY_KEY.FOLLOWER_LIST],
  queryFn: () =>
    clientInstance<FollowList>({
      endPoint: `/profiles/me/followers`,
      method: "GET",
      init: { cache: "no-store" },
    }),
};
