import { Suspense } from "react";

import ClientAuthLoader from "./client-auth-loader";
import { AuthPlatforms } from "./types";

interface Props {
  params: Record<"platform", AuthPlatforms>;
}

async function AuthorizationPage({ params }: Props) {
  const platform = params.platform;

  return (
    <div>
      auth page
      <Suspense fallback={<div>Loading...</div>}>
        <ClientAuthLoader platform={platform} />
      </Suspense>
    </div>
  );
}

export default AuthorizationPage;
