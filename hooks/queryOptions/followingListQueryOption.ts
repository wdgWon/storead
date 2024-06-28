import { FollowList } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const followingListQueryOption = (profileId: string) => ({
  queryKey: [QUERY_KEY.FOLLOWING_LIST, profileId],
  queryFn: () =>
    clientInstance<FollowList>({
      endPoint: `/profiles/${profileId}/following`,
    }),
});
