import "next-auth";
import "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      name: string;
      image: string;
      email: string;
      role: string;
      needPasswordChange: string;
    };
    accessTokens: {
      accessToken: string;
      refreshToken: string;
      expireIn: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      userId: string;
      name: string;
      image: string;
      email: string;
      role: string;
      needPasswordChange: string;
    };
    accessTokens: {
      accessToken: string;
      refreshToken: string;
      expireIn: number;
    };
  }
}
