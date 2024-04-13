import Image from "next/image";

import eclipsLoading from "@/public/ellipsis_loading_sm.svg";

function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-brightness-50">
      <Image
        src={eclipsLoading}
        alt="loading"
      />
    </div>
  );
}

export default Loading;
