"use client";

import { UserNameProps } from "../type";

function UserName({ name }: UserNameProps) {
  return <h2 className="font-extrabold text-2xl">{name}</h2>;
}

export default UserName;
