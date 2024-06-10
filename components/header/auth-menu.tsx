"use client";

import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

import { profilesMeRetrieve } from "@/api/generated/domain";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QUERY_KEY } from "@/constants/queryKey";

function AuthMenu() {
  const { data: user } = useQuery({
    queryKey: [QUERY_KEY.MY_PROFILE],
    queryFn: profilesMeRetrieve,
  });

  return (
    <>
      {user ? (
        <Avatar>
          <AvatarImage
            src={user.profile_photo}
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}

export default AuthMenu;
