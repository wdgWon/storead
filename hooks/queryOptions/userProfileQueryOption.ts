import { Profile } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const userProfileQueryOption = (id: string) => ({
  queryKey: [QUERY_KEY.USER_PROFILE, id],
  queryFn: () =>
    clientInstance<{ status_code: number; profile: Profile }>({
      endPoint: `/profiles/${id}`,
      method: "GET",
      init: { cache: "no-store" },
      includeAuth: false,
    }).then((data) => data.profile),
});
