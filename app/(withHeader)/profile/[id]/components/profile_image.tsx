"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ProfileImageProps } from "../type";

function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <Avatar className="w-40 h-40">
      <AvatarImage src={imageUrl} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default ProfileImage;
