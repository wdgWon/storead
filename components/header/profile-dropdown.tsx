"use client";

import { useCallback } from "react";

import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authMessages } from "@/constants/toastMessages";
import { logout } from "@/lib/apis/auth/logout";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Props {
  userId: string;
  photo?: string;
}

function ProfileDropdown({ userId, photo }: Props) {
  const router = useRouter();
  const logoutRequest = useCallback(async () => {
    await logout();

    //TODO: 서버 에러로 로그아웃 안되었을때 route handler로 refresh token 지워줘야됨
    toast.success(authMessages.LOGOUT);
    router.replace("/");
    router.refresh();
  }, [router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer hover:brightness-95">
          <AvatarImage
            src={photo}
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          className="cursor-pointer"
          asChild
        >
          <Link href={`/profile/${userId}`}>
            <User className="mr-2 h-4 w-4" />
            <span>내 프로필</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={logoutRequest}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;
