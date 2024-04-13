import { PropsWithChildren } from "react";

import DefaultLayout from "@/components/default-layout/default-layout";

function WithHeaderLayout({ children }: PropsWithChildren) {
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
}

export default WithHeaderLayout;
