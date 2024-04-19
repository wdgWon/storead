import { ENDPOINTS } from "@/constants/endPoints";

import { baseInstance } from "../../axios-instance";
import { SocialLoginParams } from "./type";

// TODO: 클라이언트의 로그인 요청을 next 서버에서 라우트 핸들러로 대신 요청 (process.env가 서버 코드에서만 참조되기 때문)
export async function GET(request: Request, { params }: SocialLoginParams) {
  try {
    switch (params) {
      case "google": {
        // TODO: api 요청 함수 분리
        const req = await baseInstance.get(
          `${ENDPOINTS.SOCIAL_LOGIN}/${params}`,
          {
            params: {
              client_id: `${process.env.GOOGLE_CLIENT_ID}`,
              response_type: "code",
              redirect_uri: `${process.env.GOOGLE_REDIRECT_URI}`,
              scope: `${process.env.GOOGLE_SCOPE}`,
            },
          },
        );
      }
    }
  } catch (err) {}
}
