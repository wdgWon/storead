"use client";

import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QUERY_KEY } from "@/constants/queryKey";
import { tokenVerify } from "@/lib/apis/auth/tokenVerify";

function AuthMenu() {
  const { data: user } = useQuery({
    queryKey: [QUERY_KEY.AUTH],
    queryFn: tokenVerify,
  });

  return (
    <>
      {user ? (
        <Avatar>
          <AvatarImage
            src={user.image_url}
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
