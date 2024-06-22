import { serverInstance } from "../server-instance";

export const userFollowerList = async () => {
  const response = await serverInstance({
    endPoint: `/profiles/me/followers`,
  }).then((data) => data.json());

  return response;
};
