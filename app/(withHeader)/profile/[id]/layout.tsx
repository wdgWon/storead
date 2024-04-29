import { PropsWithChildren } from "react";

import Follow from "./components/follow";
import Introduce from "./components/introduce";
import ProfileImage from "./components/profile_image";
import UserName from "./components/user-name";
import { userProfileData } from "./mock";

function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-8">
      <ProfileImage imageUrl={userProfileData.image_url} />
      <UserName name={userProfileData.user_name} />
      <Follow
        followers={userProfileData.followers}
        followings={userProfileData.followings}
      />
      <Introduce introduce={userProfileData.introduce} />
      {children}
    </div>
  );
}

export default ProfileLayout;
