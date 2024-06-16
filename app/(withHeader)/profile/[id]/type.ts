import { FollowList } from "@/api/generated/models";

export interface ProfileProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface ProfileImageProps {
  imageUrl?: string;
}

export interface UserNameProps {
  name?: string;
}

export interface FollowProps {
  followers: FollowList;
  followings: FollowList;
}

export interface IntroduceProps {
  introduce?: string;
}
