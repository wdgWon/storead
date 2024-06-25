import Link from "next/link";

import { getMyProfile } from "@/lib/apis/profile/myProfile";

import ProfileDropdown from "./profile-dropdown";

async function AuthMenu() {
  const user = await getMyProfile();

  return (
    <>
      {user ? (
        <ProfileDropdown
          userId={user.profile_id}
          photo={user.profile_photo}
        />
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}

export default AuthMenu;
