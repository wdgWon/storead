import { FollowList } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const followingListQueryOption = {
  queryKey: [QUERY_KEY.FOLLOWING_LIST],
  queryFn: () =>
    clientInstance<FollowList>({
      endPoint: `/profiles/me/following`,
      method: "GET",
      cache: "no-store",
    }),
};
