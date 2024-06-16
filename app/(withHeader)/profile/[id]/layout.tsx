import { PropsWithChildren } from "react";

function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-8">
      {children}
    </div>
  );
}

export default ProfileLayout;
