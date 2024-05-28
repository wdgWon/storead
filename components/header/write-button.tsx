import Link from "next/link";

import { Button } from "../ui/button";

function WriteButton() {
  return (
    <Link href="/review-form">
      <Button
        type="button"
        className="font-bold"
      >
        WRITE
      </Button>
    </Link>
  );
}

export default WriteButton;
