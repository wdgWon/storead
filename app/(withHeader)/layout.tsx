import { PropsWithChildren } from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

function WithHeaderLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <div className="flex-grow"></div>
      <Footer />
    </>
  );
}

export default WithHeaderLayout;
