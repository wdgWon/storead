import ClientAuthLoader from "./client-auth-loader";
import { AuthPlatforms } from "./types";

interface Props {
  params: Record<"platform", AuthPlatforms>;
}

async function AuthorizationPage({ params }: Props) {
  const platform = params.platform;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-500 animate-spin"></div>
          <h2 className="mt-4 text-xl font-bold text-gray-800">Loading...</h2>
        </div>
        <p className="text-center text-gray-600">
          인증 요청중입니다. 잠시만 기다려주세요.
        </p>
      </div>
      <ClientAuthLoader platform={platform} />
    </div>
  );
}

export default AuthorizationPage;
