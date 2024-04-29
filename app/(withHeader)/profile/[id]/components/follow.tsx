"use client";

import { GoPeople } from "react-icons/go";
import { LuDot } from "react-icons/lu";

import { FollowProps } from "../type";

function Follow({ followers, followings }: FollowProps) {
  return (
    <div className="flex items-center gap-2">
      <GoPeople />
      <section className="flex items-center">
        <div className="flex gap-1 hover:text-blue-500 hover:cursor-pointer">
          <span className="font-bold">{followers.length}</span>followers
        </div>
        <LuDot />
        <div className="flex gap-1 hover:text-blue-500 hover:cursor-pointer">
          <span className="font-bold">{followings.length}</span>followings
        </div>
      </section>
    </div>
  );
}

export default Follow;
