import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/queryKey";
import { tokenVerify } from "@/lib/apis/auth/tokenVerify";

import AuthMenu from "./auth-menu";

export default async function AuthPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.AUTH],
    queryFn: tokenVerify,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuthMenu />
    </HydrationBoundary>
  );
}
