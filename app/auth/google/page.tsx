import { authConnectionsGoogleRetrieve } from "@/api/generated/domain";

import LoadPage from "./load-page";

async function AuthGooglePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: URLSearchParams;
}) {
  const selializedSearch = new URLSearchParams(searchParams).toString();
  const res = await authConnectionsGoogleRetrieve({
    code: selializedSearch,
  });

  return <div>{JSON.stringify(res)}</div>;
}

export default AuthGooglePage;
