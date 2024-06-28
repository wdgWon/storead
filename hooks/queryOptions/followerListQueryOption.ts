import { FollowList } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const followerListQueryOption = (profileId: string) => ({
  queryKey: [QUERY_KEY.FOLLOWER_LIST, profileId],
  queryFn: () =>
    clientInstance<FollowList>({
      endPoint: `/profiles/${profileId}/followers`,
    }),
});
