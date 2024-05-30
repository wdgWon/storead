import LoadPage from "./load-page";

async function AuthGooglePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LoadPage />;
}

export default AuthGooglePage;
