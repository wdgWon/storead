"use client";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AuthMenu() {
  //FIXME: api 연동 후 useQuery로 수정
  const user = {
    image_url: "https://picsum.photos/200/300",
  };

  return (
    <>
      {/* {user ? (
        <Avatar>
          <AvatarImage
            src={user.image_url}
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
      )} */}
      <Link href="/login">Login</Link>
    </>
  );
}

export default AuthMenu;
