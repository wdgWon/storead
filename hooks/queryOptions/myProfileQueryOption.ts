import { Profile } from "@/api/generated/models";
import { QUERY_KEY } from "@/constants/queryKey";
import { clientInstance } from "@/lib/apis/client-instance";

export const myProfileQueryOption = {
  queryKey: [QUERY_KEY.MY_PROFILE],
  queryFn: () =>
    clientInstance<{ status_code: number; profile: Profile }>({
      endPoint: `/profiles/me`,
      method: "GET",
      init: { cache: "no-store" },
    }).then((data) => data.profile),
};
